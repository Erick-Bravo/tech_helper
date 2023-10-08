import { Box, Flex, Link, Text } from "@chakra-ui/react";

const navTexPad = "0 20px";
const darkGray = "#474747"

const NavBar = () => {
  return (
    <Flex
      w="100%"
      p="0 100px"
      h="50px"
      backgroundColor={darkGray}
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
        <Link p={navTexPad} _hover={{textUnderlineOffset: "none"}} href="/"> 
          Home
        </Link>
        <Link p={navTexPad} _hover={{textUnderlineOffset: "none"}} href="/htp">
          HTP
        </Link>
        <Link p={navTexPad} _hover={{textUnderlineOffset: "none"}} href="/westinghouse">
          Westingthouse
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
