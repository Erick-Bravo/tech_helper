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
import { secondary } from "../../globals";

const ToDo = () => {
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState<
    {
      name: string;
      ticket: string;
      description: string;
      completed: boolean;
      date: number;
    }[]
  >([]); //Note: type checking in useState was needed to prevent the "never[]" error.

  const localGet = localStorage.getItem("toDoList");
  useEffect(() => {
    if (localGet !== null) {
      setToDoList(JSON.parse(localGet));
    }
  }, []);

  const newList: {
    name: string;
    ticket: string;
    description: string;
    completed: boolean;
    date: number;
  } = {
    name,
    ticket,
    description,
    completed: false,
    date: Date.now(),
  };

  const handleNewSubmit = () => {
    const newArray = [newList, ...toDoList];
    setToDoList(newArray);
    const stringifyList = JSON.stringify(newArray);
    localStorage.setItem("toDoList", stringifyList);
    setName("");
    setTicket("");
    setDescription("");
  };

  const handleDelete = (date: number) => {
    const filteredArray = toDoList.filter((item) => item.date !== date);
    setToDoList(filteredArray);
    const stringifyList = JSON.stringify(filteredArray);
    localStorage.setItem("toDoList", stringifyList);
  };

  const handleComplete = (date: number) => {
    const filteredArray = toDoList.filter((item) => item.date === date);
    const changedComplete = filteredArray[0]
    const newItem = {...changedComplete, completed: true}
    console.log(newItem)
  }

  return (
    <Flex w="100%" flexDir="column" alignItems="center" mt="100px">
      <FormControl w="400px">
        <Text fontSize="25px" mb="15px">
          Add a To-Do
        </Text>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          bg="white"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <FormLabel>Ticket</FormLabel>
        <Input
          type="number"
          bg="white"
          onChange={(e) => setTicket(e.target.value)}
          value={ticket}
        />
        <FormLabel>Description</FormLabel>
        <Textarea
          bg="white"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>

      <Button
        mt="30px"
        onClick={handleNewSubmit}
        bg={secondary}
        color="white"
        size="sm"
      >
        Add
      </Button>

      <Box w="700px">
        <Text fontSize="30px" fontWeight="bold" mt="60px">
          To Do
        </Text>
        <Flex w="100%" flexDir="column">
          {toDoList.length > 0 ? (
            toDoList.map((item, i) => {
              return (
                <Flex key={i} flexDir="column" ml="40px" mt="20px" w="100%">
                  <Text fontSize="25px">{item.name}</Text>
                  <Text fontSize="25px">{item.ticket}</Text>
                  <Text fontSize="15px" mt="10px">
                    {item.description}
                  </Text>
                  <Flex justifyContent="flex-end">
                    <Button size="sm" m="20px" w="100px" onClick={() => handleDelete(item.date)}>
                      Delete
                    </Button>
                    {/* <Button
                      size="sm"
                      m="20px"
                      w="100px"
                      bg={secondary}
                      color="white"
                      onClick={() => handleComplete(item.date)}
                    >
                      Completed
                    </Button> */}
                  </Flex>
                </Flex>
              );
            })
          ) : (
            <Box>Nothing on your list</Box>
          )}
        </Flex>
        <Flex></Flex>
      </Box>
    </Flex>
  );
};

export default ToDo;
