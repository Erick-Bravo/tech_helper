import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const offWhite = "#E2E2E2";

// type modelListTypes = {
//   name: string;
//   status: string;
// }

const modelList = [
  { id: "RGH", name: "Crossover (RGH) Floor", status: "Active" },
  { id: "ELU", name: "Elite Ultra Wall and Floor", status: "Active" },
  { id: "EFTU", name: "Elite Fire Tube Ultra", status: "Active" },
  { id: "ELX", name: "Elite XL Boiler", status: "Active" },
  { id: "ELV", name: "Everlast Elevate Residential WH", status: "Active" },
  { id: "SUPR", name: "Everlast Elevate Residential WH", status: "Active" },
  { id: "EVR", name: "Everlast Residential Electric WH", status: "Active" },
  { id: "EVC", name: "Everlast Medium Duty 3 Element", status: "Active" },
  { id: "EVG", name: "Everlast Grid Enabled", status: "Active" },
  { id: "GL", name: "Glass Lined Storage Tank", status: "Active" },
  { id: "SR", name: "Large Volume Storage Tank", status: "Active" },
  { id: "PH", name: "Pheonix Gas Fired WH", status: "Active" },
  { id: "PH75", name: "Pheonix Gas Fired Light Duty", status: "Active" },
  { id: "PHM", name: "Pheonix Gas Fired Multi-Fit", status: "Active" },
  { id: "PHP", name: "Pheonix Gas Fired Plus", status: "Active" },
  { id: "PHR", name: "Pioneer", status: "Active" },
  { id: "SSU", name: "Stainless Steel Superstor Ultra", status: "Active" },
  { id: "SSC", name: "Superstor Contender Titanium", status: "Active" },
  { id: "MSSU", name: "Superstor Ultra Max", status: "Active" },
  
  { id: "CGH", name: "Crossover Commercial", status: "Discontinued" },
  { id: "EFTC", name: "EFT Combination Boiler", status: "Discontinued" },
  { id: "EL", name: "Elite Boiler", status: "Discontinued" },
  { id: "EFT", name: "Elite FT Heating Boiler", status: "Discontinued" },
  { id: "EP", name: "Elite Premiere Boiler", status: "Discontinued" },
  { id: "EP-VHW", name: "Elite VWH", status: "Discontinued" },
  { id: "ETI", name: "Endurati Boiler", status: "Discontinued" },
  { id: "EV", name: "Everlast", status: "Discontinued" },
  { id: "EVC", name: "Everlast Light Duty, Medium Duty Commercial Electric", status: "Discontinued" },
  { id: "RT", name: "Hydra Smart RT", status: "Discontinued" },
  { id: "RTC", name: "Hydra Smart RTC", status: "Discontinued" },
  { id: "MC", name: "MC Series", status: "Discontinued" },
  { id: "ModCon", name: "ModCon Commercial Gas Boiler", status: "Discontinued" },
  { id: "UFT", name: "UFT Boiler", status: "Discontinued" }, 
  { id: "UFTC", name: "UFT Combi Boiler", status: "Discontinued" }, 
  { id: "PHE", name: "Versa Hyrdo", status: "Discontinued" }, 
  { id: "SSV", name: "Voyager", status: "Discontinued" }, 

];

const HTP = () => {
  return (
    <Flex
      backgroundColor={offWhite}
      h="100%"
      p="40px 20px"
      alignItems="center"
      flexDirection="column"
    >
      <Input
        placeholder="Model"
        backgroundColor="white"
        w="500px"
        border="1px solid black"
        m="20px"
        h="50px"
      />
      <Button w="100px" mb="20px">
        Search
      </Button>
      {/* <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>one</TabPanel>

          <TabPanel>
            <p>two</p>
          </TabPanel>

          <TabPanel>
            <p>three</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </Flex>
  );
};

export default HTP;
