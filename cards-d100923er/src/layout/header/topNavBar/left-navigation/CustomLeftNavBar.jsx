import { Box } from "@mui/material";
import React from "react";
import CustomLogoIcon from "../logo/CustomLogoIcon";
import CustomLogo from "../logo/CustomLogo";
import CustomNavItem from "../../../../routes/components/CustomNavItem";
import ROUTES from "../../../../routes/routesModel";

export default function CustomLeftNavBar() {
  return (
    <>
      <Box>
        <CustomLogoIcon />
        <CustomLogo />
        <CustomNavItem to={ROUTES.ABOUT} label={"about"} />
        <CustomNavItem to={ROUTES.SANDBOX} label={"sandbox"} />
      </Box>
    </>
  );
}
