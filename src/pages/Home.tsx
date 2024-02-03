import { Box, Flex, Text } from "@chakra-ui/react";
import { linkColor, offWhite } from "../globals";
import React, { useState } from "react";
import GasValves from "../components/Links_Home/GasValves";
import Sensors from "../components/Links_Home/Sensors";
import TextLinks from "../components/TextLinks";
import Search from "../components/Links_Home/ModelSearch/ModelSearch";
import WiringDiagrams from "../components/Links_Home/WiringDiagram/WiringInput";

enum HomeSwitch {
  GasValves = "Gas Valves",
  Sensors = "Sensors",
  ModelSearch = "Model Search",
  WiringDiagrams = "Wiring Diagrams",
}

const Home = () => {
  const [homeSwitch, setHomeSwitch] = useState("");

  const resourceData = [
    { enum: HomeSwitch.ModelSearch },
    { enum: HomeSwitch.WiringDiagrams },
  ];

  const HomeSwitchController = (type: string) => {
    switch (type) {
      case HomeSwitch.GasValves:
        return <GasValves />;
      case HomeSwitch.WiringDiagrams:
        return <WiringDiagrams />;
      default:
        return <Search />;
    }
  };

  return (
    <Flex p="40px 20px">
      <Box w="200px" ml="75px" fontSize="20px">
        {resourceData.map((resource) => {
          return (
            <Box key={resource.enum}>
              <TextLinks resource={resource} setHomeSwitch={setHomeSwitch} />
            </Box>
          );
        })}
      </Box>
      <Flex w="100%" justifyContent="center" pr="12.5%">
        {HomeSwitchController(homeSwitch)}
      </Flex>
    </Flex>
  );
};

export default Home;
