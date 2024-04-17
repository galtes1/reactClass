import React from "react";
import { Box } from "@mui/material";
import CustomNavItem from "../../../../routes/components/CustomNavItem";

import ROUTES from "../../../../routes/routesModel";
export default function CustomNotLogged() {
 return (
  <Box>
   <CustomNavItem to={ROUTES.SIGNUP} label={"sign up"} />
   <CustomNavItem to={ROUTES.LOGIN} label={"log in"} />
  </Box>
 );
}
