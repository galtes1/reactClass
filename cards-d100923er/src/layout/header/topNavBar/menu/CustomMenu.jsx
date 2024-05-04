import React from "react";
import MuiMenu from "@mui/material/Menu";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import { Box, MenuItem } from "@mui/material";
import CustomMenuLink from "../../../../routes/components/CustomMenuLink";
import ROUTES from "../../../../routes/routesModel";

export default function CustomMenu({ isOpen, anchorEl, onClose }) {
 const { user } = useUser();
 const { handleLogout } = useUsers();

 const onLogout = () => {
  handleLogout();
  onClose();
 };

 return (
  <MuiMenu
   open={isOpen}
   onClose={onClose}
   anchorEl={anchorEl}
   anchorOrigin={{ vertical: "top", horizontal: "right" }}
   keepMounted
   transformOrigin={{ vertical: "top", horizontal: "right" }}
  >
   <Box>
    <CustomMenuLink
     text="about"
     navigateTo={ROUTES.ABOUT}
     onClick={onClose}
     styles={{ display: { xs: "block", md: "none" } }}
    />
    {!user && (
     <>
      <CustomMenuLink
       text="login"
       navigateTo={ROUTES.LOGIN}
       onClick={onClose}
       styles={{ display: { xs: "block", md: "none" } }}
      />
      <CustomMenuLink
       text="signup"
       navigateTo={ROUTES.SIGNUP}
       onClick={onClose}
       styles={{ display: { xs: "block", md: "none" } }}
      />
     </>
    )}

    {user && (
     <>
      <CustomMenuLink
       text="profile"
       navigateTo={ROUTES.USER_PROFILE}
       onClick={onClose}
      />
      <CustomMenuLink
       text="edit account"
       navigateTo={ROUTES.EDIT_USER}
       onClick={onClose}
      />

      <MenuItem onClick={onLogout}>Logout</MenuItem>
     </>
    )}
   </Box>
  </MuiMenu>
 );
}
