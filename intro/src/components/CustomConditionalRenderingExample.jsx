import { Typography } from "@mui/material";
import React from "react";

const user = {
  name: "gal",
  email: "mail@mail",
};

export default function CustomConditionalRenderingExample() {
  return user ? (
    <Typography> hi, welcome {user.name}</Typography>
  ) : (
    <Typography>Access Denied</Typography>
  );
}
