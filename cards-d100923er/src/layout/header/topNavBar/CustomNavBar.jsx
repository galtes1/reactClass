import React from "react";
import CustomLeftNavBar from "./left-navigation/CustomLeftNavBar";
import { AppBar, Toolbar } from "@mui/material";

export default function CustomNavBar() {
  return (
    <AppBar position="sticky" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <CustomLeftNavBar />
      </Toolbar>
    </AppBar>
  );
}
