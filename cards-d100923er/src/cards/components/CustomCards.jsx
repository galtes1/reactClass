import { Box, Container } from "@mui/material";
import React from "react";
import CustomCardComponent from "./card/CustomCardComponent";

export default function CustomCards({
  cards,
  handleCardDelete,
  handleCardLike,
}) {
  return (
    <Container
      sx={{
        direction: "rtl",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#6DBABA",
      }}
    >
      {cards.map((card) => (
        <Box sx={{ mb: 10 }} key={card._id}>
          <CustomCardComponent
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        </Box>
      ))}
    </Container>
  );
}
