import { Box, Button, Flex, Input, Link, Text,   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import ModelSearch from "../components/ModelSearch";

const offWhite = "#E2E2E2";
const linkColor = "#4895EF";

// Input field needs to be a FORM, so "enter" button will work. (Less hand movements)

const HTP = () => {
  return (
    <Flex
      backgroundColor={offWhite}
      h="100%"
      p="40px 20px"
      alignItems="center"
      flexDirection="column"
    >
      <ModelSearch />
    </Flex>
  );
};

export default HTP;
