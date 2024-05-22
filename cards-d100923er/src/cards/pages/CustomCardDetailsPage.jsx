import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import CustomSpinner from "../../components/CustomSpinner";
import CustomError from "../../components/CustomError";

export default function CustomCardDetailsPage() {
  const { cardId } = useParams();
  const { value, getCardById } = useCards();
  const { card, error, isLoading } = value;

  useEffect(() => {
    getCardById(cardId);
  }, [cardId, getCardById]);

  if (isLoading) return <CustomSpinner />;
  if (error) return <CustomError errorMessage={error} />;
  if (card) {
    return (
      <Container>
        <CustomPageHeader
          title="card details"
          subtitle="this is the card you chose"
        />
        <Typography>this is business no. {cardId}</Typography>
        <Typography>card title: {card.title}</Typography>
      </Container>
    );
  }
  return null;
}
