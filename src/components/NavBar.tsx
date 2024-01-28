import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { darkGray } from "../globals";

const navTexPad = "0 20px";

const excelFileId =
  "https://aristonthermo.sharepoint.com/:x:/r/sites/USAWarrantyShipments-SAP/Documenti%20condivisi/General/Warranty%20Parts%20Shipping.xlsx?d=wdd52a2b1fbb145629b47a222ecc8ede3&csf=1&web=1&e=IwmqUj";
const teamsLink = `msteams://teams.microsoft.com/l/file/${excelFileId}`;

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
        <Link p={navTexPad} _hover={{ textUnderlineOffset: "none" }} href="/">
          Home
        </Link>
        <Link
          p={navTexPad}
          _hover={{ textUnderlineOffset: "none" }}
          href={teamsLink}
        >
          Warranty Parts Shipping
        </Link>
        {/* <Link p={navTexPad} _hover={{textUnderlineOffset: "none"}} href="/westinghouse">
          Westingthouse
        </Link> */}
      </Flex>
    </Flex>
  );
};

export default NavBar;
