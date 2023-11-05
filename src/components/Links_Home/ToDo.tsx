import { FormControl, FormLabel, Input, Box, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const ToDo = () => {
  //For New To Do. Add to existing localHost data.
  //Push to existing localGet
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");

  // const localGet = localStorage.getItem("toDoObject")
  // console.log(localGet)
  const toDoList: {name: string, ticket: string, description: string}[] = [
    {
      name,
      ticket,
      description,
    },
  ];

  const handleSubmit = () => {
    const parsedList = JSON.stringify(toDoList);
    console.log(parsedList)
    localStorage.setItem("toDoList", parsedList);
  };


  return (
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          w="300px"
          bg="white"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <FormLabel>Ticket</FormLabel>
        <Input
          type="number"
          w="300px"
          bg="white"
          onChange={(e) => setTicket(e.target.value)}
          value={ticket}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          w="300px"
     
          bg="white"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <Button mt="30px" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default ToDo;
