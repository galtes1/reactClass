import axios from "axios";
import { useState } from "react";

export default function useCards() {
  const [card, setCard] = useState();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // פונקציה ראשונה
  const getAllCards = async (cards) => {
    const response = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
    );
    const data = response.data;
    setCards(data);
  };

  // פונקציה שניה
  const getCardById = async (cardsId) => {
    const response = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
    );
    const data = response.data;
    setCard(data);
  };

  return {};
}
