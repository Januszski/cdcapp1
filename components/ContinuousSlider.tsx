import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function ContinuousSlider({ setSlider, sliderVal }) {
  // const [valueSlider, setValueSlider] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    // setValueSlider(newValue as number);
    setSlider(newValue);
  };
  // console.log("SLIDER VALUE", valueSlider);

  return (
    <Box sx={{ width: 400 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          color="primary"
          aria-label="Volume"
          value={sliderVal}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
}
