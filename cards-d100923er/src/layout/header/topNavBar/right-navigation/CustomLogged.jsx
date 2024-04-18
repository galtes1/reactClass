import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import useUsers from "../../../../users/hooks/useUsers";
import { Button } from "@mui/material";

const CustomLogged = () => {
  const { handleLogout } = useUsers();
  return (
    <>
      <Button variant="contained " onClick={handleLogout}>
        log out
      </Button>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
          <Avatar alt="avatar" src="/assets/images/avatarUser.png" />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default CustomLogged;
