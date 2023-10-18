import { Flex } from "@chakra-ui/react";
import ModelSearch from "../components/ModelSearch";
import { offWhite } from "../globals";

const HTP = () => {
  return (
    <Flex
      backgroundColor={offWhite}
      h="100%"
      p="40px 20px"
      alignItems="center"
      flexDirection="column"
    >
      <ModelSearch />
    </Flex>
  );
};

export default HTP;
