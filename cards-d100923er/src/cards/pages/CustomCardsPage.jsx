import React, { useEffect, useState } from "react";

import CustomPageHeader from "../../components/CustomPageHeader";
import axios from "axios";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import useCards from "../hooks/useCards";

export default function CustomCardsPage() {
 const {
  cards,
  error,
  isLoading,
  getAllCards,
  handleCardDelete,
  handleCardLike,
 } = useCards();

 useEffect(() => {
  getAllCards();
 }, []);

 return (
  <div>
   <CustomPageHeader
    title="Cards"
    subtitle="on this page you can find explanations about using the app"
   />
   <CustomCardsFeedback
    cards={cards}
    handleCardDelete={handleCardDelete}
    handleCardLike={handleCardLike}
    isLoading={isLoading}
    error={error}
   />
  </div>
 );
}
