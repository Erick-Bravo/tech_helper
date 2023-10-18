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
import React, { useState } from "react";
import ToDo from "../components/HomeSwitchComps/ToDo";
import GasValves from "../components/HomeSwitchComps/GasValves";
import Sensors from "../components/HomeSwitchComps/Sensors";

enum HomeSwitch {
  ToDo = "To Do",
  GasValves = "Gas Valves",
  Sensors = "Sensors",
}

const TextLinks: React.FC<{
  resource: { id: string; name: string };
  setHomeSwitch: (id: string) => void;
}> = ({ resource, setHomeSwitch }) => {
  return (
    <Text
      mb="10px"
      _hover={{ cursor: "pointer" }}
      onClick={() => setHomeSwitch(resource.id)}
    >
      {resource.name}
    </Text>
  );
};

const Home = () => {
  const [homeSwitch, setHomeSwitch] = useState("");

  const resourceData = [
    { id: HomeSwitch.ToDo, name: "To Do" },
    { id: HomeSwitch.GasValves, name: "Gas Valves" },
    { id: HomeSwitch.Sensors, name: "Sensors" },
  ];

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
        {resourceData.map((resource) => {
          return (
            <Box key={resource.name}>
              <TextLinks resource={resource} setHomeSwitch={setHomeSwitch} />
            </Box>
          );
        })}
      </Box>
      <Box w="100%" border="2px solid black">
        {HomeSwitchController(homeSwitch)}
      </Box>
    </Flex>
  );
};

export default Home;
