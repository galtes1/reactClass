import React, { useEffect, useState } from "react";

import CustomPageHeader from "../../components/CustomPageHeader";
import axios from "axios";
import CustomCardsFeedback from "../components/CustomCardsFeedback";

export default function CustomCardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getCardsData = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        const data = response.data;
        setCards(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getCardsData();
  }, []);
  const handleCardDelete = (id) => {
    console.log("you deleted card no" + id);
  };

  const handleCardLike = (id) => {
    console.log("you liked card no" + id);
  };
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
