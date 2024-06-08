import React, { useCallback, useEffect, useState } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSnack } from "../../providers/SnackbarProvider";
import CustomNewCardButton from "../components/CustomNewCardButton";
import CustomSpinner from "../../components/CustomSpinner";
import { Navigate } from "react-router-dom";

const FavCardsPage = () => {
 const { user } = useUser();

 const navigate = useNavigate();

 const { value, ...rest } = useCards();
 const { error, isLoading, filteredCards } = value;

 const { handleCardDelete, handleGetFavCards, handleCardLike, getAllCards } =
  rest;

 useEffect(() => {
  if (!user) {
   navigate(ROUTES.CARDS);
  } else {
   handleGetFavCards();
  }
 }, [user, handleGetFavCards, navigate]);

 const handleDelete = async (id) => {
  await handleCardDelete(id);
  await handleGetFavCards();
 };

 const handleLike = async (id) => {
  await handleCardLike(id);
  await handleGetFavCards();
 };

 if (!user) return <Navigate to={ROUTES.ROOT} replace />;

 return (
  <Container>
   <CustomPageHeader title="Your Favorites Cards" subtitle="All here For You" />
   <CustomCardsFeedback
    isLoading={isLoading}
    error={error}
    cards={filteredCards}
    handleDelete={handleDelete}
    handleLike={handleLike}
   />
   <CustomNewCardButton />
  </Container>
 );
};

export default FavCardsPage;
