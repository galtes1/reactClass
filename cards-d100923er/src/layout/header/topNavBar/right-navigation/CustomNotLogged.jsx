import React from "react";
import Box from "@mui/material";
import CustomNavItem from "../../../../routes/components/CustomNavItem";
import CustomSignupPage from "../../../../users/pages/CustomSignupPage";
import CustomLoginPage from "../../../../users/pages/CustomLoginPage";
export default function CustomNotLogged() {
 return (
  <Box>
   <CustomNavItem to={<CustomSignupPage />} label={"sign up"} />
   <CustomNavItem to={<CustomLoginPage />} label={"log in"} />
  </Box>
 );
}
