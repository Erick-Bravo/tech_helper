import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { wiringData } from "../../../data/wiringList";
import { linkColor } from "../../../globals";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const WiringDiagrams = () => {
  const [inputText, setInput] = useState("");
  const [result, setResult] = useState("-");

  const handleSubmit = () => {
    if (inputText === "") setResult("");
    const pdfFound = wiringData[inputText];
    setResult(pdfFound ? pdfFound : "");
  };

  const modelInput = (event: { target: { value: string } }) => {
    const text = event.target.value.toUpperCase();
    setInput(text);
  };

  const handleEnter = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <Flex
      p="40px 0px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="25px">Wiring Diagram Search</Text>
      <Text fontSize="15px">Input part number of wire harness</Text>
      <Input
        placeholder="Model"
        backgroundColor="white"
        w="500px"
        m="20px"
        h="50px"
        onChange={modelInput}
        onKeyDown={handleEnter}
      />
      {result === "" && <Text fontSize="35px">No result found</Text>}
      {result !== "-" && result.length !== 0 && (
        <Flex justifyContent="center" alignItems="center">
          <Link href={result} color={linkColor} fontSize="20" isExternal>
            Wiring Diagram <ExternalLinkIcon mx="2px" />
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default WiringDiagrams;
