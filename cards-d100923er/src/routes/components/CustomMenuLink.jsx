import React from "react";
import CustomNavBarLink from "./CustomNavBarLink";
import { MenuItem } from "@mui/material";

export default function CustomMenuLink({ text, navigateTo, onClick, styles }) {
 return (
  <CustomNavBarLink to={navigateTo}>
   <MenuItem sx={{ ...styles }} onClick={onClick}>
    {text}
   </MenuItem>
  </CustomNavBarLink>
 );
}
