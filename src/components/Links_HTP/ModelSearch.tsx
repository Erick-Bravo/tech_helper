import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { modelList, modelListTypes } from "../../data/modelList";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { linkColor, secondary } from "../../globals";

const ModelSearch = () => {
  const [inputText, setInput] = useState("");
  const [result, setResult] = useState<modelListTypes[]>([
    { id: "Model", name: "Name", status: "Status", link: "" },
  ]);

  const handleSubmit = () => {
    const filteredList = modelList.filter((item) => {
      if (inputText === "") {
        return;
      }
      return item.id.includes(inputText);
    });
    setResult(filteredList);
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
        <Flex justifyContent="center">
          <Button
            w="100px"
            h="30px"
            mb="20px"
            bg={secondary}
            color="white"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </Flex>
      </Flex>
      {result.length === 0 && <Text fontSize="35px">No result found</Text>}
      {result.length !== 0 &&
        result[0].id !== "Model" &&
        result.map((item) => {
          return (
            <Box key={item.name}>
              <Text
                fontSize="35px"
                m="20px 10px"
              >{` ${item.id} - ${item.name}`}</Text>
              <Flex justifyContent="center" alignItems="center">
                <Text mr="20px">{item.status}</Text>
                {item.link !== "" && (
                  <Link
                    href={item.link}
                    color={linkColor}
                    fontSize="20"
                    isExternal
                  >
                    Model Links Page <ExternalLinkIcon mx="2px" />
                  </Link>
                )}
              </Flex>
            </Box>
          );
        })}
    </>
  );
};

export default ModelSearch;
