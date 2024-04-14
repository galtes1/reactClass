import React from "react";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import CustomSignUpForm from "../components/CustomSignUpForm";
import Joi from "joi";
import { useUsers } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const initialSignupForm = {
 first: "",
 middle: "",
 last: "",
 phone: "",
 email: "",
 password: "",
 url: "",
 alt: "",
 state: "",
 country: "",
 city: "",
 street: "",
 houseNumber: 0,
 zip: 0,
 isBusiness: false,
};

const signupSchema = {
 first: Joi.string().min(2).max(256).required(),
 middle: Joi.string().min(2).max(256).allow(""),
 last: Joi.string().min(2).max(256).required(),
 phone: Joi.string()
  .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
  .rule({ message: 'user "phone" must be a valid phone number' })
  .required(),
 email: Joi.string()
  .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
  .rule({ message: 'user "mail" must be a valid mail' })
  .required(),
 password: Joi.string()
  .ruleset.regex(
   /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
  )
  .rule({
   message:
    'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
  })
  .required(),
 url: Joi.string()
  .ruleset.regex(
   /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  )
  .rule({ message: "user image must be a valid url" })
  .allow(""),
 alt: Joi.string().min(2).max(256).allow(""),
 state: Joi.string().allow(""),
 country: Joi.string().min(2).max(256).required(),
 city: Joi.string().min(2).max(256).required(),
 street: Joi.string().min(2).max(256).required(),
 houseNumber: Joi.number().required(),
 zip: Joi.number(),
 isBusiness: Joi.boolean().required(),
};
const handleSubmit = (data) => {
 console.log(data);
};
export default function CustomSignupPage() {
 const {
  data,
  errors,
  handleChange,
  handleReset,
  validateForm,
  onSubmit,
  handleChangeCheckBox,
 } = useForm(initialSignupForm, signupSchema, handleSubmit);
 console.log(data);
 const { user } = useUsers();

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
