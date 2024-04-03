import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function CustomMyList() {
  const [myList, setMyList] = useState([1, 1, 1]);

  const addNumberToList = () => {
    setMyList([...myList, 1]);
  };
  return (
    <>
      <Button variant="contained" onClick={addNumberToList}>
        Prees to add 1 to list
      </Button>
      {myList.map((list, index) => (
        <Box key={index}>{list}</Box>
      ))}
    </>
  );
}
