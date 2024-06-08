import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomCardsFeedback from "../components/CustomCardsFeedback";
import CustomNewCardButton from "../components/CustomNewCardButton";

export default function MyCardsPage() {
 const { value, handleGetMyCards, handleCardDelete, handleCardLike } =
  useCards();
 const { filteredCards, error, isLoading } = value;

 const { user } = useUser();
 const navigate = useNavigate();

 useEffect(() => {
  handleGetMyCards();
  console.log(user);
 }, [user, handleGetMyCards, navigate]);

 const handleDelete = async (id) => {
  await handleCardDelete(id);
  await handleGetMyCards();
 };

 const handleLike = async (id) => {
  await handleCardLike(id);
  await handleGetMyCards();
 };
 return (
  <div>
   <Container>
    <CustomPageHeader title="My Cards" subtitle="edit and delete" />
    <CustomCardsFeedback
     isLoading={isLoading}
     error={error}
     cards={filteredCards}
     handleDelete={handleDelete}
     handleLike={handleLike}
    />
    <CustomNewCardButton />
   </Container>
  </div>
 );
}
