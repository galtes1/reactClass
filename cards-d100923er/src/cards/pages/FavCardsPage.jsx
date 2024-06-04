import React, { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSnack } from "../../providers/SnackbarProvider";
import CustomNewCardButton from "../components/CustomNewCardButton";

const FavCardsPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const { value, ...rest } = useCards();
  const { error, isLoading, filteredCards } = value;

  const { handleCardDelete, handleGetFavCards, handleCardLike } = rest;
  const setSnack = useSnack();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, [handleGetFavCards, user, navigate]);

  const deleteFavCard = useCallback(
    async (CardId) => {
      await handleCardDelete(CardId);
      await handleGetFavCards();
    },
    [handleCardDelete, handleGetFavCards]
  );

  const handleLike = useCallback(
    async (CardId) => {
      await handleCardLike();
    },
    [handleCardLike]
  );
  return (
    <Container>
      <CustomPageHeader
        title="Your Favorites Cards"
        subtitle="All here For You"
      />
      <CustomCardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        handleDelete={deleteFavCard}
        handleLike={handleLike}
      />
      <CustomNewCardButton />
    </Container>
  );
};

export default FavCardsPage;
