import React, { useState } from "react";
import { Box, Button } from "@mui/material";

export default function CustomMyBox2() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const incrementSize = () => {
    // אתגר 1
    if (width < 200 && height < 200) {
      setWidth(width + 10);
      setHeight(height + 10);
    }
  };

  const decrementSize = () => {
    // אתגר 2
    if (width > 10 && height > 10) {
      setWidth(width - 10);
      setHeight(height - 10);
    }
  };

  const fixedWidth = width + "px";
  const fixedHeight = height + "px";
  return (
    <>
      <Box
        sx={{ height: fixedHeight, width: fixedWidth, backgroundColor: "red" }}
      ></Box>
      <Button variant="contained" onClick={incrementSize}>
        increment
      </Button>
      <Button variant="contained" onClick={decrementSize}>
        decrement
      </Button>
    </>
  );
}
