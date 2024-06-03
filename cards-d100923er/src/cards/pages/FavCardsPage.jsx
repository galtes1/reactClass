import React, { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CustomAddCardPage from "./CustomAddCardPage";

const FavCardsPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { value, ...rest } = useCards();
  const { error, isLoading, cards } = value;
  const { handleCardDelete, handleGetFavCards } = rest;

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

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, [handleGetFavCards]);
  return (
    <Container>
      <CustomPageHeader
        title="Your Favorites Cards"
        subtitle="All here For You"
      />
      <CustomCardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        handleDelete={deleteFavCard}
        handleLike={changeLikeStatus}
      />
      <CustomAddCardPage />
    </Container>
  );
};

export default FavCardsPage;
