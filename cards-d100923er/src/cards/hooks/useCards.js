import { useCallback, useState } from "react";
import {
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "../../hooks/useAxios";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();
  const navigate = useNavigate();

  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "displaying all cards");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCardCreate = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new card created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardUpdate = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        debugger;
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", `Business Card # ${cardId} Updated Successfully`);
        navigate(ROUTES.ROOT);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback(
    async (id) => {
      setIsLoading(true);
      try {
        const card = await deleteCard(id);
        setCard(card);
        setSnack("primary", `card no. ${id} deleted`, "filled");
        setTimeout(() => {
          getAllCards();
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
      console.log("after setIsLoading");
    },
    [setSnack, getAllCards]
  );

  const handleCardLike = useCallback((id) => {
    console.log("you liked card no" + id);
  }, []);
  return {
    card,
    cards,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleCardDelete,
    handleCardLike,
    handleCardCreate,
    handleCardUpdate,
  };
}
