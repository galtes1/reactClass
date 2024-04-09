import React, { useEffect } from "react";

import CustomPageHeader from "../../components/CustomPageHeader";
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
  }, [getAllCards]);

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
