import { Box, Flex } from "@chakra-ui/react";
import ModelSearch from "../components/Links_HTP/ModelSearch";
import { offWhite } from "../globals";
import { useState } from "react";
import OldAssModel from "../components/Links_HTP/OldAssModel";
import TextLinks from "../components/TextLinks";

enum HTPSwitch {
  ModelSearch = "Model Search",
  OldAssModel = "Old Ass Model Date",
}

const HTP = () => {
  const [htpSwitch, setHTPSwitch] = useState("");

  const resourceData = [
    { enum: HTPSwitch.ModelSearch },
    { enum: HTPSwitch.OldAssModel },
  ];

  const HTPSwitchController = (type: string) => {
    switch (type) {
      case HTPSwitch.OldAssModel:
        return <OldAssModel />;
      default:
        return  <ModelSearch />;
    }
  };

  return (
    <Flex backgroundColor={offWhite} h="100%" p="40px 20px">
      <Box w="300px" ml="75px" fontSize="20px">
        {resourceData.map((resource) => {
          return (
            <Box key={resource.enum}>
              <TextLinks resource={resource} setHTPSwitch={setHTPSwitch} />
            </Box>
          );
        })}
      </Box>
      <Flex w="100%"  alignItems="center" flexDir="column">
        {HTPSwitchController(htpSwitch)}
      </Flex>
    </Flex>
  );
};

export default HTP;
