import { Box, Container } from "@mui/material";
import React from "react";
import CustomCardComponent from "./card/CustomCardComponent";

export default function CustomCards({ cards, handleDelete, handleCardLike }) {
  return (
    <Container
      sx={{
        direction: "rtl",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <Box sx={{ mb: 10 }} key={card._id}>
          <CustomCardComponent
            card={card}
            handleDelete={handleDelete}
            handleCardLike={handleCardLike}
          />
        </Box>
      ))}
    </Container>
  );
}
