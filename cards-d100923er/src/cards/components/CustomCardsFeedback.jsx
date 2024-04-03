import React from "react";

import CustomSpinner from "../../components/CustomSpinner";
import CustomError from "../../components/CustomError";
import { Typography } from "@mui/material";
import CustomCards from "./CustomCards";

export default function CustomCardsFeedback({
  isLoading,
  cards,
  error,
  handleCardDelete,
  handleCardLike,
}) {
  if (isLoading) return <CustomSpinner />;
  if (error) return <CustomError />;
  if (cards && cards.length === 0) return;
  <Typography m={2}>
    Oops... it seems there are no business cards to display
  </Typography>;

  if (cards) {
    return (
      <CustomCards
        cards={cards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
      />
    );
  }

  return null;
}
