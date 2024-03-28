import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import SerialInput from "./SerialInput";

const AristonSerialDecoder = () => {


  return (
    <Flex h="100%" p="40px 0px" justifyContent="center" alignItems="center">
      <Flex w="100%" alignItems="center" flexDir="column">
        <Text mt="50px" fontSize="25px">
          Ariston Serial Decoder
        </Text>
        <Text fontSize="15px">Must be 21 digits</Text>
        <SerialInput />
      </Flex>
    </Flex>
  );
};

export default AristonSerialDecoder;
