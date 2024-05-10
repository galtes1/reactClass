import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import CustomCardForm from "../components/CustomCardForm";
import { Container } from "@mui/material";

export default function CustomAddCardPage() {
 const { user } = useUser();
 const { handleCardCreate } = useCards();
 const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
  useForm(initialCardForm, cardSchema, handleCardCreate);

 if (!user) return <Navigate to={ROUTES.CARDS} />;

 return (
  <Container
   sx={{
    paddingTop: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   <CustomCardForm
    title="add new card"
    onSubmit={onSubmit}
    onReset={handleReset}
    errors={errors}
    validateForm={validateForm}
    onInputChange={handleChange}
    data={data}
   />
  </Container>
 );
}
