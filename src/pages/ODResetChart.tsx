import { Box, Flex, Link } from "@chakra-ui/react";
import { linkColor } from "../globals";
import { SideBarData } from "../data/sideBarData";
import OutdoorResetChart from "../components/Links_Home/OutdoorResetChart/OutdoorResetChart";

const ODResetChart = () => {
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
      <Flex w="100%" justifyContent="center" pr="12.5%">
        <OutdoorResetChart />
      </Flex>
    </Flex>
  );
};

export default ODResetChart;
