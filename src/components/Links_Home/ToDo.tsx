import { FormControl, FormLabel, Input, Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const ToDo = () => {
  //For New To Do. Add to existing localHost data.
  //Push to existing localGet
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");

  // const localGet = JSON.parse(localStorage.getItem("toDoObject") || "")
  // console.log(localGet)

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
        <Input
          type="text"
          w="300px"
          bg="white"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <Button mt="30px">Submit</Button>
    </Box>
  );
};

export default ToDo;
