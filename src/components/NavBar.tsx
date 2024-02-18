import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { darkGray } from "../globals";
import { useState } from "react";
import TimeZoneBar from "./TimeZoneBar";

const navTexPad = "0 20px";

const NavBar = () => {
  return (
    <Flex flexDir="column">
      <Flex
        w="100%"
        p="0 100px"
        h="70px"
        backgroundColor="black"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px"
        color="white"
      >
        <Flex justifyContent="flex-start">
          <Text p="0 20px" fontSize="25px" fontWeight="bold">
            Tech Helper
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="100%"
          fontWeight="bold"
          fontFamily="sans-serif"
          color="white"
        >
          <Link p={navTexPad} _hover={{ textUnderlineOffset: "none" }} href="/">
            Home
          </Link>
          <Link
            p={navTexPad}
            _hover={{ textUnderlineOffset: "none" }}
            href="/to-do"
          >
            To-Do
          </Link>
        </Flex>
      </Flex>
      <TimeZoneBar />
    </Flex>
  );
};

export default NavBar;
