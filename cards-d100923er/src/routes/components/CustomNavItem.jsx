import React from "react";
import CustomNavBarLink from "./CustomNavBarLink";
import { Button, Typography } from "@mui/material";

export default function CustomNavItem({ to, sx, label }) {
  return (
    <CustomNavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </CustomNavBarLink>
  );
}
