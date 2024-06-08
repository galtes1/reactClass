import { useCallback, useEffect, useState } from "react";
import {
 changeLikeStatus,
 createCard,
 deleteCard,
 editCard,
 getCard,
 getCards,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "../../hooks/useAxios";
import { useMemo } from "react";
import { useUser } from "../../users/providers/UserProvider";

export default function useCards() {
 const [card, setCard] = useState(null);
 const [cards, setCards] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState();
 const [query, setQuery] = useState("");
 const [filteredCards, setFilter] = useState(null);
 const [searchParams] = useSearchParams();
 const { user } = useUser();
 const location = useLocation;
 const [filterCount, setfilterCount] = useState();

 const setSnack = useSnack();
 const navigate = useNavigate();

 useEffect(() => {
  setQuery(searchParams.get("q") ?? "");
 }, [searchParams]);

 useEffect(() => {
  if (cards) {
   setFilter(
    cards.filter(
     (card) =>
      card.title.includes(query) || String(card.bizNumber).includes(query)
    )
   );
  }
 }, [cards, query]);

 //

 useEffect(() => {
  const getFilteredCards = () => {
   if (user) {
    switch (location.pathname) {
     case "/my-cards":
      return cards.filter((card) => card.user_id === user._id);
     case "/fav-cards":
      return cards.filter((card) => card.likes.includes(user._id));
     default:
      return cards;
    }
   }
   return cards;
  };
  if (cards) {
   const cards1 = getFilteredCards();
   setFilter(
    cards1.filter(
     (card) =>
      card.title.includes(query) ||
      String(card.bizNumber).includes(query) ||
      card.phone.includes(query) ||
      card.email.includes(query) ||
      card.subtitle.includes(query) ||
      card.address.city.includes(query)
    )
   );
  }
 }, [cards, query, location.pathname, user]);

 useEffect(() => {
  if (filteredCards !== null && filteredCards.length >= 0) {
   setfilterCount(filteredCards.length);
  }
 }, [filteredCards]);

 const requestStatus = (loading, errorMessage, cards, card = null) => {
  setIsLoading(loading);
  setError(errorMessage);
  setCards(cards);
  setCard(card);
 };

 useAxios();

 const getAllCards = useCallback(async () => {
  try {
   setIsLoading(true);
   const cards = await getCards();
   requestStatus(false, null, cards);
   setSnack("success", "displaying all cards");
  } catch (error) {
   requestStatus(false, error.message, null);
  }
 }, [setSnack]);

 const getCardById = useCallback(async (cardId) => {
  try {
   setIsLoading(true);
   const card = await getCard(cardId);
   requestStatus(false, null, null, card);
   console.log("card form useCards:", card);
   return card;
  } catch (error) {
   requestStatus(false, error, null);
  }
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
  async (cardId) => {
   try {
    setIsLoading(true);
    const card = await deleteCard(cardId);
    setCard(card);
    setSnack("error", `card no. ${cardId} deleted`, "filled");
    setTimeout(() => {
     getAllCards();
    }, 2000);
   } catch (error) {
    setError(error.message);
   }
   setIsLoading(false);
   console.log("after setIsLoading");
  },
  [setSnack, getAllCards]
 );

 const handleCardLike = useCallback(
  async (cardId) => {
   try {
    await changeLikeStatus(cardId);
    setSnack("success", "like 👍");
   } catch (error) {
    requestStatus(false, error, null);
   }
  },
  [setSnack]
 );

 const handleGetFavCards = useCallback(async () => {
  try {
   setIsLoading(true);
   const cards = await getCards();
   const favCards = cards.filter((card) => card.likes.includes(user.id));
   requestStatus(false, null, favCards);
  } catch (error) {}
 }, [user]);

 const value = useMemo(() => {
  return { isLoading, cards, card, error, filteredCards, filterCount };
 }, [isLoading, cards, card, error, filteredCards, filterCount]);
 return {
  value,
  getAllCards,
  getCardById,
  handleCardDelete,
  handleCardLike,
  handleCardCreate,
  handleCardUpdate,
  handleGetFavCards,
 };
}
