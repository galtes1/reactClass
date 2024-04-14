import { Container, Button } from "@mui/material";
import { React } from "react";
import CustomForm from "../../forms/components/CustomForm";
import CustomInput from "../../forms/components/CustomInput";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";

const initialLoginForm = {
  email: "",
  password: "",
};
const loginSchema = {
  email: Joi.string()
    .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: "Please enter a valid mail" })
    .required(),

  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
    })
    .required(),
};
const handleSubmit = (data) => {
  console.log(data);
};

export default function CustomLogInForm() {
  const {
    data,
    errors,
    handleChange,
    onSubmit,
    handleReset,
    validateForm,
    handleChangeCheckBox,
  } = useForm(initialLoginForm, loginSchema, handleSubmit);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomForm
        title="log in"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
      >
        <CustomInput
          label="email2"
          name="email"
          data={data}
          error={errors.email}
          onChange={handleChange}
        />
        <CustomInput
          label="password"
          name="password"
          type="password"
          data={data}
          error={errors.password}
          onChange={handleChangeCheckBox}
        />
      </CustomForm>
      <Button variant="containted">log out</Button>
    </Container>
  );
}
