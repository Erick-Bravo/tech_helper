import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Textarea,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ToDo = () => {
  //For New To Do. Add to existing localHost data.
  //Push to existing localGet
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState<
    { name: string; ticket: string; description: string }[]
  >([]); //Note: type checking in useState was needed to prevent the "never[]" error.

  const localGet = localStorage.getItem("toDoList");
  useEffect(() => {
    if (localGet !== null) {
      setToDoList(JSON.parse(localGet));
      console.log(toDoList);
    }
  }, []);

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

      <Flex w="100%">
        {toDoList.length > 0 ? (
          toDoList.map((item, i) => {
            return (
              <Flex key={i} flexDir="column" ml="40px" mt="20px">
                <Text fontSize="25px">{item.name}</Text>
                <Text fontSize="25px">{item.ticket}</Text>
                <Text fontSize="15px" mt="10px">
                  {item.description}
                </Text>
              </Flex>
            );
          })
        ) : (
          <Box>Nothing on your list</Box>
        )}
      </Flex>
    </Box>
  );
};

export default ToDo;
