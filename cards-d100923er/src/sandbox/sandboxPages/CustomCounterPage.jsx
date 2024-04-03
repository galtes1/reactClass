import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useCounter from "../hooks/useCounter";

export default function CustomCounterPage() {
  const { counter, increment, decrement, resetCounter } = useCounter(50, 10);

  useEffect(() => {
    if (counter % 7 === 0 || counter.toString().includes("7")) {
      console.log(counter + " Boom");
    }
    return () => {
      console.log("counter unmount");
    };
  }, [counter]);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        height={200}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Typography variant="h2">{counter}</Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ mr: 4 }} onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={resetCounter}>
        Reset
      </Button>
    </Box>
  );
}
