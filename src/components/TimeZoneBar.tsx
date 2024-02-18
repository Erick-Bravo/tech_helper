import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ZoneText: React.FC<{ text: string; timeZone: string }> = ({
  text,
  timeZone,
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const date = new Date();
      const newTime = date.toLocaleTimeString("en-US", {
        timeZone: timeZone,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      });
      const [hours, minutes] = newTime.split(":");
      const formattedTime = `${hours}:${minutes}`;
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <Box>
      <Text fontWeight="bold">{text}</Text>
      <Text fontWeight="bold" fontSize="20px" color="#555555">
        {currentTime}
      </Text>
    </Box>
  );
};

const TimeZoneBar = () => {
  const WestZone = "America/Los_Angeles";
  const MountainZone = "America/Denver";
  const CentralZone = "America/Chicago";
  const EastZone = "America/New_York";

  return (
    <Flex
      w="100%"
      h="70px"
      justifyContent="space-around"
      alignItems="center"
      bg="lightgray"
    >
      <ZoneText text="West: " timeZone={WestZone} />
      <ZoneText text="Mountain: " timeZone={MountainZone} />
      <ZoneText text="Central: " timeZone={CentralZone} />
      <ZoneText text="East: " timeZone={EastZone} />
    </Flex>
  );
};

export default TimeZoneBar;
