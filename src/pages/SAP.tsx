import { AspectRatio, Box, Flex, Link } from "@chakra-ui/react";
import { linkColor } from "../globals";
import { SideBarData } from "../data/sideBarData";

const SAP = () => {
  return (
    <Flex p="40px 20px">
      <Box w="200px" ml="75px" fontSize="20px">
        {SideBarData.map((data) => {
          return (
            <Box key={data.text} mb="15px">
              <Link
                _hover={{ cursor: "pointer", color: linkColor }}
                href={data.route}
              >
                {data.text}
              </Link>
            </Box>
          );
        })}
      </Box>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        pr="12.5%"
        flexDir="column"
      >
        <Box fontSize="20px" fontWeight="bold" m="20px">
          VA03 - Tracking Numbers
        </Box>
        <AspectRatio w="800px" ratio={16 / 9}>
          <iframe
            title="Youtube Video Player"
            src="https://www.youtube.com/embed/640o-9-Cw9o?si=BFDrkOViC8wvosz2"
          ></iframe>
        </AspectRatio>
      </Flex>
    </Flex>
  );
};

export default SAP;
