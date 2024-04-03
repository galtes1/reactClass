import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function CustomMyBox() {
  const [color, setColor] = useState("red");

  const changeBgColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };
  return (
    <>
      <Box sx={{ width: "500px", height: "500px", backgroundColor: color }}>
        <Button variant="contained" onClick={changeBgColor}>
          color
        </Button>
      </Box>
    </>
  );
}
