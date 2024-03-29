import {
  Slider as SliderChakra,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";

const MinSupplySlider = ({minSupplyTemp, setMinSupplyTemp}: any) => {

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box p={4} pt={6} w="60%">
      <SliderChakra
        aria-label="slider-ex-6"
        onChange={(val) => setMinSupplyTemp(val)}
        min={30}
        max={200}
        value={minSupplyTemp}
        defaultValue={minSupplyTemp}
      >
        <SliderMark value={40} {...labelStyles}>
          40°
        </SliderMark>
        <SliderMark value={60} {...labelStyles}>
          60°
        </SliderMark>
        <SliderMark value={80} {...labelStyles}>
          80°
        </SliderMark>
        <SliderMark value={100} {...labelStyles}>
          100°
        </SliderMark>
        <SliderMark value={120} {...labelStyles}>
          120°
        </SliderMark>
        <SliderMark value={140} {...labelStyles}>
          140°
        </SliderMark>
        <SliderMark value={160} {...labelStyles}>
          160°
        </SliderMark>
        <SliderMark value={180} {...labelStyles}>
          180°
        </SliderMark>
        <SliderMark
          value={minSupplyTemp}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {minSupplyTemp}°
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </SliderChakra>
    </Box>
  );
};

export default MinSupplySlider;
