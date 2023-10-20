import { Box, Flex, Text } from "@chakra-ui/react";
import { linkColor, offWhite } from "../globals";
import React, { useState } from "react";
import ToDo from "../components/Links_Home/ToDo";
import GasValves from "../components/Links_Home/GasValves";
import Sensors from "../components/Links_Home/Sensors";
import TextLinks from "../components/TextLinks";

enum HomeSwitch {
  ToDo = "To Do",
  GasValves = "Gas Valves",
  Sensors = "Sensors",
}

const Home = () => {
  const [homeSwitch, setHomeSwitch] = useState("");

  const resourceData = [
    { enum: HomeSwitch.ToDo },
    { enum: HomeSwitch.GasValves },
    { enum: HomeSwitch.Sensors },
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
            <Box key={resource.enum}>
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
