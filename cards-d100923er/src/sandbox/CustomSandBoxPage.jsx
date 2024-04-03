import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomNavItem from "../routes/components/CustomNavItem";

export default function CustomSandBoxPage() {
  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar sx={{ color: "black" }}>
          <CustomNavItem to="counter" label="Counter" />
          <CustomNavItem to="lifeCycle" label="Life cycle" />
          <CustomNavItem to="countries" label="Counteries" />
          <CustomNavItem to="spinner" label="Spinner" />
          <CustomNavItem to="form" label="form example" />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
