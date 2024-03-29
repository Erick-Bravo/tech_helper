import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { modelList, modelListTypes } from "../../../data/modelList";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { linkColor } from "../../../globals";

const ModelInput = () => {
  const [inputText, setInput] = useState("");
  const [result, setResult] = useState<modelListTypes[]>([
    { id: "Model", name: "Name", modelStatus: "Status", link: "" },
  ]);

  const handleSubmit = () => {
    const filteredList = modelList.filter((item) => {
          if (inputText === "") {
          return
        }
        return item.id.includes(inputText.toUpperCase());
      })
    setResult(filteredList);
  };

  const modelInput = (event: { target: { value: string } }) => {
    const text = event.target.value;
    setInput(text);
  };

  const handleEnter = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <Flex flexDir="column" pb="40px">
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
      {result.length === 0 && <Text fontSize="35px">No result found</Text>}
      {result.length !== 0 &&
        result[0].id !== "Model" &&
        result.map((item) => {
          return (
            <Box key={item.id}>
              <Text
                fontSize="35px"
                m="20px 10px"
              >{` ${item.id} : ${item.name}`}</Text>
              <Flex justifyContent="center" alignItems="center">
                <Text mr="20px">{item.modelStatus}</Text>
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

export default ModelInput;
