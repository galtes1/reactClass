import React from "react";
import CustomPageHeader from "../components/CustomPageHeader";
import { Container, Grid } from "@mui/material";

export default function CustomAboutPage() {
  return (
    <Container maxWidth="lg">
      <CustomPageHeader
        title="About..."
        subtitle="on this page you can find all businesses cards"
      />
      <Grid container spacing={0}>
        <Grid />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
        }}
      >
        <img src="assets/images/aboutBG.jpg" alt="about" />
      </Grid>
    </Container>
  );
}
