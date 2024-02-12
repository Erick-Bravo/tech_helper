import { Flex, Text } from "@chakra-ui/react";
import ModelInput from "./ModelInput";
import OldAssModel from "./OldAssInput";

const Search = () => {
  return (
    <Flex h="100%" p="40px 0px" justifyContent="center" alignItems="center">
      <Flex w="100%" alignItems="center" flexDir="column">
        <Text fontSize="25px">Old Serial Date</Text>
        <Text fontSize="15px">Input the letters in the model (Example: Month: "L" Year: "G")</Text>
        <OldAssModel />
        <Text mt="50px" fontSize="25px">
          Model Search
        </Text>
        <Text fontSize="15px">Input the letters of model (Example: "UFT")</Text>
        <ModelInput />
      </Flex>
    </Flex>
  );
};

export default Search;
