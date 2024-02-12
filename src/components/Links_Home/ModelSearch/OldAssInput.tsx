import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  oldAssMonthList,
  oldAssMonthTypes,
  oldAssYearList,
  oldAssYearTypes,
} from "../../../data/oldAssModelList";

const OldAssModel = () => {
  const [monthInputText, setMonthInput] = useState("");
  const [month, setMonth] = useState<oldAssMonthTypes[]>([
    { letter: "Month", month: "Month", value: 0 },
  ]);
  const [yearInputText, setYearInput] = useState("");
  const [year, setYear] = useState<oldAssYearTypes[]>([
    { letter: "Year", year: 0 },
  ]);

  // const revisionOutput = () => {
  //Use year to determine revision,
  //if on a transition year, check month
  //   if (year[0].year > 2008) {
  //     return "Rev 2"
  //   }
  // };

  //Month
  const handleMonthSubmit = () => {
    const filteredList = oldAssMonthList.filter((item) => {
      if (monthInputText === "") {
        return;
      }
      return item.letter === monthInputText;
    });
    setMonth(filteredList);
  };

  const monthInput = (event: { target: { value: string } }) => {
    const text = event.target.value.toUpperCase();
    setMonthInput(text);
  };

  const handleMonthEnter = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleMonthSubmit();
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////
  //Year
  const handleYearSubmit = () => {
    const filteredList = oldAssYearList.filter((item) => {
      if (yearInputText === "") {
        return;
      }
      return item.letter === yearInputText;
    });
    setYear(filteredList);
  };

  const yearInput = (event: { target: { value: string } }) => {
    const text = event.target.value.toUpperCase();
    setYearInput(text);
  };

  const handleYearEnter = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleYearSubmit();
      handleMonthSubmit()
    }
  };

  return (
    <>
      <Flex>
        <Flex flexDir="column" alignItems="center">
          <Input
            placeholder="Month"
            backgroundColor="white"
            w="100px"
            m="20px"
            h="50px"
            onChange={monthInput}
            onKeyDown={handleMonthEnter}
          />
          {month.length === 0 && <Text fontSize="15px">not found</Text>}
          {month.length !== 0 && month[0].month !== "Month" && (
            <Text fontSize="25px" m="20px 10px">
              {month[0].month}
            </Text>
          )}
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Input
            placeholder="Year"
            backgroundColor="white"
            w="100px"
            m="20px"
            h="50px"
            onChange={yearInput}
            onKeyDown={handleYearEnter}
          />
          {year.length === 0 && <Text fontSize="15px">not found</Text>}
          {year.length !== 0 && year[0].year !== 0 && (
            <Text fontSize="25px" m="20px 10px">
              {year[0].year}
            </Text>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default OldAssModel;
