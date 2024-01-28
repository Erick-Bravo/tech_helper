import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { darkGray } from "../globals";
import { useState } from "react";

const navTexPad = "0 20px";

// const warrantyPartsID =
//   "https://aristonthermo.sharepoint.com/:x:/r/sites/USAWarrantyShipments-SAP/Documenti%20condivisi/General/Warranty%20Parts%20Shipping.xlsx?d=wdd52a2b1fbb145629b47a222ecc8ede3&csf=1&web=1&e=IwmqUj";
// const teamsWarrantyPartsLink = `msteams://teams.microsoft.com/l/file/${warrantyPartsID}`;

// const sitPartsID =
//   "https://aristonthermo.sharepoint.com/:x:/r/sites/AristoCustomerExperienceTeam-TechSupport/Documenti%20condivisi/Tech%20Support/SiT%20Programmer%20Software/SIT%20Part%20Files-9-27-2022.xlsx";
// const teamsSITLink = `msteams://teams.microsoft.com/l/file/${sitPartsID}`;

const NavBar = () => {
  // const [loading, setLoading] = useState(false);

  // const handleCurserLoading = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // };

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
          href="/to-do"
        >
          To-Do
        </Link>
        {/* <Link p={navTexPad} _hover={{ textUnderlineOffset: "none" }} href="/">
          Warranty Parts Shipping
        </Link> */}
        <Link p={navTexPad} _hover={{ textUnderlineOffset: "none" }} href="/">
          TechSupport AI
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
