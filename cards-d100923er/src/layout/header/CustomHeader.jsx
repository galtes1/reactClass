import React from "react";
import { Box } from "@mui/material";
import CustomNavBar from "./topNavBar/CustomNavBar";

export default function CustomHeader() {
  return (
    <Box
      position="sticky"
      direction="row"
      spacing={2}
      sx={{
        backgroundColor: "#6DBABA",
        color: "#e3f2fd",
        position: "sticky",
        zIndex: 999,
      }}
    >
      <CustomNavBar />
    </Box>
  );
}
