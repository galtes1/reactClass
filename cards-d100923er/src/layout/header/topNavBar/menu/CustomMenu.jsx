import React from "react";
import MuiMenu from "@mui/material/Menu";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";

export default function CustomMenu({ isOpen, anchorEl, onclose }) {
 const { user } = useUser();
 const { handleLogout } = useUsers();

 const onLogout = () => {
  handleLogout();
  onclose();
 };

 return <MuiMenu></MuiMenu>;
}
