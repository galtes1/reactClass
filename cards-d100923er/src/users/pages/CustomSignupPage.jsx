import React from "react";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import CustomSignUpForm from "../components/CustomSignUpForm";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import theSignupSchema from "../models/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";

export default function CustomSignupPage() {
 const { handleSignup } = useUsers();
 const {
  data,
  errors,
  handleChange,
  handleReset,
  validateForm,
  onSubmit,
  handleChangeCheckBox,
 } = useForm(initialSignupForm, theSignupSchema, handleSignup);
 const { user } = useUser();

 if (user) {
  return <Navigate to={ROUTES.ROOT} replace={true} />;
 }
 return (
  <Container
   sx={{
    paddingTop: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   <CustomSignUpForm
    onSubmit={onSubmit}
    onReset={handleReset}
    validateForm={validateForm}
    title={"register form"}
    errors={errors}
    data={data}
    onInputChange={handleChange}
    handleChangeCheckBox={handleChangeCheckBox}
   />
  </Container>
 );
}
