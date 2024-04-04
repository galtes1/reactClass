import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import CustomSpinner from "../../components/CustomSpinner";
import CustomError from "../../components/CustomError";

export default function CustomCardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id]);

  if (isLoading) return <CustomSpinner />;
  if (error) return <CustomError errorMessage={error} />;
  return (
    <Container>
      <CustomPageHeader
        title="card details"
        subtitle="this is the card you chose"
      />
      <Typography>this is business no. {id}</Typography>
      <Typography>card title: {card.title}</Typography>
    </Container>
  );
}
