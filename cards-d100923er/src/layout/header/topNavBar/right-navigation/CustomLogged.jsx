import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/menuProvider";

const CustomLogged = () => {
 const setOpen = useMenu();
 return (
  <Tooltip title="open settings">
   <IconButton
    sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
    onClick={() => setOpen(true)}
   >
    <Avatar alt="avatar" src="/assets/images/avatarUser.png" />
   </IconButton>
  </Tooltip>
 );
};

export default CustomLogged;
