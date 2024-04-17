import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const CustomLogged = () => {
 return (
  <Tooltip title="Open settings">
   <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
    <Avatar alt="avatar" src="/assets/images/avatarUser.png" />
   </IconButton>
  </Tooltip>
 );
};

export default CustomLogged;
