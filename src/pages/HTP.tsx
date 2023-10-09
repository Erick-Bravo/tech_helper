import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { modelList, modelListTypes } from "../data/modelList";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const offWhite = "#E2E2E2";
const linkColor = "#4895EF";

const HTP = () => {
  const [inputText, setInput] = useState("");
  const [result, setResult] = useState<modelListTypes[]>([
    { id: "Model", name: "Name", status: "Status", link: "" },
  ]);

  const modelInput = (e: { target: { value: string } }) => {
    const text = e.target.value.toUpperCase();
    setInput(text);
  };

  const handleSubmit = () => {
    const filteredList = modelList.filter((item) => {
      if (inputText === "") {
        return;
      }
      return item.id === inputText;
    });
    setResult(filteredList);
  };

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
        onChange={modelInput}
      />
      <Button w="100px" mb="20px" onClick={handleSubmit}>
        Search
      </Button>
      {result.length === 0 && <Text fontSize="35px">No result found</Text>}
      {result.map((item) => {
        return (
          <>
            <Text
              fontSize="35px"
              m="10px"
              key={item.id}
            >{` ${item.id} - ${item.name} - ${item.status}`}</Text>
            {item.link !== "" && (
              <Link href={item.link} color={linkColor} fontSize="20" isExternal>
                Model Links Page <ExternalLinkIcon mx='2px' />
              </Link>
            )}
          </>
        );
      })}
    </Flex>
  );
};

export default HTP;
