import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import CustomCardForm from "../components/CustomCardForm";

export default function CustomEditCardPage() {
 const { id } = useParams();
 const { handleCardUpdate, getCardById, card } = useCards();
 const { user } = useUser();
 const {
  data,
  errors,
  setData,
  handleChange,
  handleReset,
  validateForm,
  onSubmit,
 } = useForm(initialCardForm, cardSchema, (newCard) =>
  handleCardUpdate(card._id, newCard)
 );

 useEffect(() => {
  getCardById(id).then((data) => {
   const modelCard = mapCardToModel(data);
   setData(modelCard);
  });
 }, [getCardById, id, setData]);

 if (!user) return <Navigate replace to={ROUTES.CARDS} />;

 return (
  <Container
   sx={{
    paddingTop: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   {data && (
    <CustomCardForm
     title="edit card"
     onSubmit={onSubmit}
     onReset={handleReset}
     errors={errors}
     validateForm={validateForm}
     onInputChange={handleChange}
     data={data}
    />
   )}
  </Container>
 );
}
