import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CustomCounter() {
  // מגדירים שנקרא counter
  // useState = מכניס בו 0
  const [counter, setCounter] = useState(0);

  //הגדרה של פונקציות בשביל החישוב
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
    </Box>
  );
}
