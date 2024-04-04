import axios from "axios";
import { useState } from "react";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // פונקציה ראשונה
  const getAllCards = async () => {
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

  // פונקציה שניה
  const getCardById = async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + id
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleCardDelete = (id) => {
    console.log("you deleted card no" + id);
  };

  const handleCardLike = (id) => {
    console.log("you liked card no" + id);
  };
  return {
    card,
    cards,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
  };
}
