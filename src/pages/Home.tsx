import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { offWhite } from "../globals";
import { useState } from "react";
import ToDo from "../components/HomeSwitchComps/ToDo";
import GasValves from "../components/HomeSwitchComps/GasValves";
import Sensors from "../components/HomeSwitchComps/Sensors";

enum HomeSwitch {
  ToDo = "To Do",
  GasValves = "GasValves",
  Sensors = "Sensors",
}

const Home = () => {
  const [homeSwitch, setHomeSwitch] = useState("");

  const HomeSwitchController = (type: string) => {
    switch (type) {
      case HomeSwitch.GasValves:
        return <GasValves />;
      case HomeSwitch.Sensors:
        return <Sensors />;
      default:
        return <ToDo />;
    }
  };

  return (
    <Flex backgroundColor={offWhite} h="100%" p="40px 20px">
      <Box w="300px" ml="75px" fontSize="20px">
        <Text
          mb="10px"
          _hover={{ cursor: "pointer" }}
          onClick={() => setHomeSwitch(HomeSwitch.ToDo)}
        >
          To-Do
        </Text>
        <Text
          mb="10px"
          _hover={{ cursor: "pointer" }}
          onClick={() => setHomeSwitch(HomeSwitch.GasValves)}
        >
          Gas Valves
        </Text>
        <Text
          mb="10px"
          _hover={{ cursor: "pointer" }}
          onClick={() => setHomeSwitch(HomeSwitch.Sensors)}
        >
          Sensors
        </Text>
      </Box>
      <Box w="100%" border="2px solid black">
        {HomeSwitchController(homeSwitch)}
      </Box>
    </Flex>
  );
};

export default Home;
