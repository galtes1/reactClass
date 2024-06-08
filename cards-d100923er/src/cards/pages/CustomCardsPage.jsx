import React, { useEffect } from "react";

import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import useCards from "../hooks/useCards";
import CustomNewCardButton from "../components/CustomNewCardButton";

export default function CustomCardsPage() {
 const { value, getAllCards, handleCardDelete, handleCardLike } = useCards();
 const { error, isLoading, filteredCards } = value;

 useEffect(() => {
  getAllCards();
 }, [getAllCards]);

 const handleDelete = async (cardId) => {
  await handleCardDelete(cardId);
  getAllCards();
 };

 const handleLike = async (cardId) => {
  await handleCardLike(cardId);
 };
 return (
  <div>
   <CustomPageHeader title="Cards" subtitle="All Available Cards" />
   <CustomCardsFeedback
    cards={filteredCards}
    isLoading={isLoading}
    handleDelete={handleDelete}
    handleLike={handleLike}
    error={error}
   />
   <CustomNewCardButton />
  </div>
 );
}
