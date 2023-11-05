import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ToDo = () => {
  //For New To Do. Add to existing localHost data.
  //Push to existing localGet
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const localGet = localStorage.getItem("toDoList");
  // console.log(localGet)

  useEffect(() => {
    if (localGet !== null) {
      setToDoList(JSON.parse(localGet));
    }
  }, []);

  console.log(toDoList)

  const newList: { name: string; ticket: string; description: string }[] = [
    {
      name,
      ticket,
      description,
    },
  ];

  const handleNewSubmit = () => {
    const parsedList = JSON.stringify(newList);
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
      <Button mt="30px" onClick={handleNewSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default ToDo;
