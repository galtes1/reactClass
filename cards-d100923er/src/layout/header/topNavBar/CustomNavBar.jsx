import React from "react";
import CustomLeftNavBar from "./left-navigation/CustomLeftNavBar";
import { AppBar, Toolbar } from "@mui/material";
import CustomRightNavBar from "./right-navigation/CustomRightNavBar";

export default function CustomNavBar() {
 return (
  <AppBar position="sticky" elevation={10}>
   <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
    <CustomLeftNavBar />
    <CustomRightNavBar />
   </Toolbar>
  </AppBar>
 );
}
