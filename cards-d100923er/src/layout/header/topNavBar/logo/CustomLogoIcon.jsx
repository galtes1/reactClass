import { Avatar, IconButton } from "@mui/material";
import React from "react";
import CustomNavBarLink from "../../../../routes/components/CustomNavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function CustomLogoIcon() {
  return (
    <CustomNavBarLink to={ROUTES.ROOT}>
      <IconButton>
        <Avatar
          alt="business-card"
          src="assets/images/avatarCards.png"
          sx={{ width: 56, height: 56 }}
        />
      </IconButton>
    </CustomNavBarLink>
  );
}
