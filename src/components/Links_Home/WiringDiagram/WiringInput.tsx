import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

const WiringDiagrams = () => {
  const [inputText, setInput] = useState("");

  const handleSubmit = () => {
    // const filteredList = modelList.filter((item) => {
    //   if (inputText === "") {
    //     return;
    //   }
    //   return item.id.includes(inputText);
    // });
    // setResult(filteredList);
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
    <>
      <Flex flexDir="column">
        <Input
          placeholder="Model"
          backgroundColor="white"
          w="500px"
          m="20px"
          h="50px"
          onChange={modelInput}
          onKeyDown={handleEnter}
        />
      </Flex>
    </>
  );
};

export default WiringDiagrams;
