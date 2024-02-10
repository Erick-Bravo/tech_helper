import {
    Slider as SliderChakra,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
  } from '@chakra-ui/react'
import { useState } from 'react'

  const Slider = () => {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box p={4} pt={6} w="60%">
        <SliderChakra aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
          <SliderMark value={25} {...labelStyles}>
            25°
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            50°
          </SliderMark>
          <SliderMark value={75} {...labelStyles}>
            75°
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}°
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </SliderChakra>
      </Box>
    )
  }
  
  export default Slider;