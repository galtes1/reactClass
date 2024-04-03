import { Container, Typography } from "@mui/material";
import React from "react";
import CustomPageHeader from "../../components/CustomPageHeader";
import { useParams } from "react-router-dom";

export default function CustomCardDetailsPage() {
  const { id } = useParams();
  return (
    <Container>
      <CustomPageHeader
        title="card details"
        subtitle="this is the card you chose"
      />
      <Typography>this is business no. {id}</Typography>
    </Container>
  );
}
