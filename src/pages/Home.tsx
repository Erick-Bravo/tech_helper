import {
  Box,
  Flex,
  Link,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Search from "../components/Links_Home/ModelSearch/ModelSearch";
import { linkColor } from "../globals";
import { SideBarData } from "../data/sideBarData";
import AristonSerialDecoder from "../components/Links_Home/AristonSerialDecoder/AristonSerialDecoder";

const Home = () => {
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

        <Tabs isFitted variant="soft-rounded" colorScheme="blue" w="100%">
          <Flex w="100%" justifyContent="center">
            <TabList w="700px">
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>HTP</Tab>
              <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Ariston</Tab>
            </TabList>
          </Flex>

          <TabIndicator
            mt="-1.5px"
            height="2px"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Search />
            </TabPanel>
            <TabPanel>
              <AristonSerialDecoder />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Home;
