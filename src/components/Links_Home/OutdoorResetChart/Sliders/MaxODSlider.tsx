import {
  Slider as SliderChakra,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";

const MaxODSlider = ({maxODTemp, setMaxODTemp}: any) => {

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box p={4} pt={6} w="60%">
      <SliderChakra
        aria-label="slider-ex-6"
        onChange={(val) => setMaxODTemp(val)}
        min={-30}
        max={90}
        value={maxODTemp}
        defaultValue={maxODTemp}
      >
        <SliderMark value={-20} {...labelStyles}>
          -20°
        </SliderMark>
        <SliderMark value={0} {...labelStyles}>
          0°
        </SliderMark>
        <SliderMark value={20} {...labelStyles}>
          20°
        </SliderMark>
        <SliderMark value={40} {...labelStyles}>
          40°
        </SliderMark>
        <SliderMark value={60} {...labelStyles}>
          60°
        </SliderMark>
        <SliderMark value={80} {...labelStyles}>
          80°
        </SliderMark>
        <SliderMark
          value={maxODTemp}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {maxODTemp}°
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </SliderChakra>
    </Box>
  );
};

export default MaxODSlider;
