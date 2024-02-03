import { Box, Flex, Text } from "@chakra-ui/react";
import ModelSearch from "../components/Links_Home/ModelSearch";
import { offWhite } from "../globals";
import { useState } from "react";
import OldAssModel from "../components/Links_Home/OldAssModel";
import TextLinks from "../components/TextLinks";


const Search = () => {

  return (
    <Flex h="100%" p="40px 0px" justifyContent="center" alignItems="center">
      <Flex w="100%"  alignItems="center" flexDir="column">
        <Text fontSize="25px">Old Serial Date</Text>
        <OldAssModel />
        <Text mt="50px" fontSize="25px">Model Search</Text>
        <Text fontSize="15px">Input the letters of model (Example: "UFT")</Text>
        <ModelSearch />
      </Flex>
    </Flex>
  );
};

export default Search;
