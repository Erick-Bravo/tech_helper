import { Box, Button, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { modelList, modelListTypes } from "../data/modelList";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const linkColor = "#4895EF";

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
      return item.id === inputText;
    });
    setResult(filteredList);
  };

  const modelInput = (event: any) => {
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
      <Input
        placeholder="Model"
        backgroundColor="white"
        w="500px"
        border="1px solid black"
        m="20px"
        h="50px"
        onChange={modelInput}
        onKeyDown={handleEnter}
      />
      <Button w="100px" mb="20px" onClick={handleSubmit}>
        Search
      </Button>
      {result.length === 0 && <Text fontSize="35px">No result found</Text>}
      {result.map((item) => {
        return (
          <Box key={item.id}>
            <Text
              fontSize="35px"
              m="20px 10px"
            >{` ${item.id} - ${item.name} - ${item.status}`}</Text>
            {item.link !== "" && (
              <Link href={item.link} color={linkColor} fontSize="20" isExternal>
                Model Links Page <ExternalLinkIcon mx="2px" />
              </Link>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default ModelSearch;
