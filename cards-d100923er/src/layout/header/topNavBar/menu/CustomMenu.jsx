import React from "react";
import MuiMenu from "@mui/material/Menu";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import { Box, MenuItem } from "@mui/material";
import CustomMenuLink from "../../../../routes/components/CustomMenuLink";
import ROUTES from "../../../../routes/routesModel";

export default function CustomMenu({ isOpen, anchorEl, onclose }) {
 const { user } = useUser();
 const { handleLogout } = useUsers();

 const onLogout = () => {
  handleLogout();
  onclose();
 };

 return <MuiMenu
    open={isOpen}
    onclose={onclose}
    anchorEl={anchorEl}
    anchorOrigin={{vertical:"top", horizontal:"right"}}
    keepMounted
    transformOrigin={{vertical:"top", horizontal:"right"}}>
        <Box>
            <CustomMenuLink
            text="about"
            navigateTo={ROUTES.ABOUT}
            onCLick={onclose}
            styles={{ display: { xs: "block", md: "none" } }}
            />
            {!user && (
                <>
                <CustomMenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onclose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <CustomMenuLink
              text="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onclose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
                </>
                  )}    

            {user && (
                <>
                <CustomMenuLink
                  text="profile"
                  navigateTo={ROUTES.USER_PROFILE}
                  onClick={onclose}
                />
                <CustomMenuLink
                  text="edit account"
                  navigateTo={ROUTES.EDIT_USER}
                  onClick={onclose}
                />
               
               <MenuItem onClick={onLogout}>Logout</MenuItem>
              </>
          
            )}
        </Box>
 </MuiMenu>;
}
