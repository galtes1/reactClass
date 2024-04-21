import { useCallback, useState } from "react";
import { editCard, getCard, getCards } from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function useCards() {
 const [card, setCard] = useState(null);
 const [cards, setCards] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState();

 const setSnack = useSnack();
 const navigate = useNavigate();

 const getAllCards = useCallback(async () => {
  try {
   setError(null);
   setIsLoading(true);
   const data = await getCards();
   setCards(data);
   setSnack("success");
  } catch (err) {
   setError(err.message);
  }
  setIsLoading(false);
 }, []);

 const getCardById = useCallback(async (id) => {
  try {
   setError(null);
   setIsLoading(true);
   const data = await getCard(id);
   setCard(data);
  } catch (err) {
   setError(err.message);
  }
  setIsLoading(false);
 }, []);

 const handleCardDelete = useCallback((id) => {
  console.log("you deleted card no" + id);
 }, []);

 const handleCardLike = useCallback((id) => {
  console.log("you liked card no" + id);
 }, []);

 const handleCardCreate = useCallback(
  async (cardFromClient) => {
   try {
    setError(null);
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

 const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
  setIsLoading(true);
  try {
   const card = await editCard(cardId, normalizeCard(cardFromClient));
  } catch (error) {}
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
 };
}
