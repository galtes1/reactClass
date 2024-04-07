import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomNavItem from "../../routes/components/CustomNavItem";

export default function CustomFormMain() {
  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar sx={{ color: "black" }}>
          <CustomNavItem to="logIn" label="log in" />
          <CustomNavItem to="signUp" label="Sign Up" />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
