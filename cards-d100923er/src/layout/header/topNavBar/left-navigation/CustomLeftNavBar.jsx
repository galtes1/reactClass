import { Box } from "@mui/material";
import React from "react";
import CustomLogoIcon from "../logo/CustomLogoIcon";
import CustomLogo from "../logo/CustomLogo";
import CustomNavItem from "../../../../routes/components/CustomNavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

export default function CustomLeftNavBar() {
  const { user } = useUser();
  return (
    <>
      <Box>
        <CustomLogoIcon />
        <CustomLogo />
        <CustomNavItem to={ROUTES.ABOUT} label={"about"} />
        <CustomNavItem to={ROUTES.CARDS} label={"cards"} />
        {user && <CustomNavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}
        <CustomNavItem to={ROUTES.SANDBOX} label={"sandbox"} />
      </Box>
    </>
  );
}
