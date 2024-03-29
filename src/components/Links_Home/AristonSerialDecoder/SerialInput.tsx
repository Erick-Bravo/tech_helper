import { Flex, Input, Text } from "@chakra-ui/react";
import { NotAllowedIcon } from "@chakra-ui/icons";
import { useState } from "react";

// 331407823193330000637

const SerialInput = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [factory, setFactory] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [calendar, setCalendar] = useState<string>("");
  const [productOnDay, setProductOnDay] = useState<string>("");

  const handleSubmit = () => {
    setResult(input);

    if (input.length !== 21) {
      return;
    }

    const dayOfYear = Number(input.substring(11, 14));
    const date = new Date(new Date().getFullYear(), 0);
    date.setDate(dayOfYear);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    setMaterial(input.substring(0, 7));
    setFactory(input.substring(7, 9));
    setYear(`20${input.substring(9, 11)}`);
    setCalendar(`${month} ${day},`);
    setProductOnDay(input.substring(14, 21));
  };

  const modelInput = (event: { target: { value: string } }) => {
    const serial = event.target.value;
    setInput(serial);
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
          placeholder="Serial Number"
          backgroundColor="white"
          w="500px"
          m="20px"
          h="50px"
          onChange={modelInput}
          onKeyDown={handleEnter}
        />
      </Flex>
      {result.length !== 21 && result !== "" && (
        <Flex alignItems="center" mb="30px">
          <NotAllowedIcon color="red" h="20px" w="20px" />
          <Text fontSize="20px" m="0 20px">
            serial is not 21 digits long
          </Text>{" "}
          <NotAllowedIcon color="red" h="20px" w="20px" />
        </Flex>
      )}

      <Flex w="350px" h="275px" bg="white" borderRadius="6px" flexDir="column">
        <Flex justifyContent="space-between">
          <Text m="20px">Material:</Text>
          <Text m="20px" fontWeight="bold">
            {material}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text m="20px">Factory: </Text>
          <Text m="20px" fontWeight="bold">
            {factory}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text m="20px">D.O.M: </Text>
          <Text m="20px" fontWeight="bold">
            {calendar} {year}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text m="20px">Product on day: </Text>
          <Text m="20px" fontWeight="bold">
            {productOnDay}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default SerialInput;
