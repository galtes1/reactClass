import { Typography } from "@mui/material";
import React from "react";
import CustomNavBarLink from "../../../../routes/components/CustomNavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function CustomLogo() {
  return (
    <>
      <CustomNavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "fantasy",
            mr: 2,
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          BCard
        </Typography>
      </CustomNavBarLink>
    </>
  );
}
