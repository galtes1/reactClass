import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import ROUTES from "../../routes/routesModel";
import CustomPageHeader from "../../components/CustomPageHeader";
import CustomForm from "../../forms/components/CustomForm";
import CustomInput from "../../forms/components/CustomInput";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";

export default function LoginPage() {
 const { handleLogin } = useUsers();

 const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
  useForm(initialLoginForm, loginSchema, handleLogin);

 const { user } = useUser();
 if (user) {
  return <Navigate to={ROUTES.ROOT} replace />;
 }

 return (
  <Container>
   <CustomPageHeader
    title="Welcome to Login page"
    subtitle="here you can log in"
   />
   <Container
    sx={{
     paddingTop: 8,
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    }}
   >
    <CustomForm
     title="login"
     styles={{ maxWidth: "450px" }}
     to={ROUTES.ROOT}
     onSubmit={onSubmit}
     onReset={handleReset}
     validateForm={validateForm}
    >
     <CustomInput
      label="email"
      name="email"
      type="email"
      error={errors.email}
      onChange={handleChange}
      data={data}
     />
     <CustomInput
      label="password"
      name="password"
      type="password"
      error={errors.password}
      onChange={handleChange}
      data={data}
     />
    </CustomForm>
   </Container>
  </Container>
 );
}
