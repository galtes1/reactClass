import React from "react";
import { Card, CardActionArea } from "@mui/material";

import CardHeaderComponent from "./CustomCardHeaderComponent";
import CardBody from "./CustomCardBody";
import CardActionBar from "./CustomCardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

function CustomCardComponent({ card, handleCardDelete, handleCardLike }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 250,
        height: 400,
        m: 2,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
      elevation={10}
    >
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          Divider
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <div style={{ marginTop: "auto" }}>
        <CardActionBar
          cardId={card._id}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
          userId={card.user_id}
        />
      </div>
    </Card>
  );
}

export default CustomCardComponent;
