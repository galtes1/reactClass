import React, { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import CustomNewCardButton from "../components/CustomNewCardButton";

const FavCardsPage = () => {
 const { user } = useUser();

 const navigate = useNavigate();

 const { value, ...rest } = useCards();
 const { error, isLoading, filteredCards } = value;

 const { handleCardDelete, handleGetFavCards, handleCardLike } = rest;

 useEffect(() => {
  handleGetFavCards();
 }, [user, handleGetFavCards, navigate]);

 const handleDelete = useCallback(
  async (id) => {
   await handleCardDelete(id);
   await handleGetFavCards();
  },
  [handleGetFavCards, handleCardDelete]
 );

 const handleLike = useCallback(
  async (id) => {
   await handleCardLike(id);
   await handleGetFavCards();
  },
  [handleCardLike, handleGetFavCards]
 );

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
