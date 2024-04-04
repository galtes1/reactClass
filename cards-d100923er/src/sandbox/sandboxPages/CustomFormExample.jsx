import { Container } from "@mui/material";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import CustomForm from "../../forms/components/CustomForm";
import ROUTES from "../../routes/routesModel";
import CustomInput from "../../forms/components/CustomInput";

const schema = {
  first: Joi.string().min(2),
  last: Joi.string().min(2).max(10),
};

const initialForm = {
  first: "",
  last: "",
};

const handleSubmit = (data) => {
  console.log(data);
};

export default function CustomFormExample() {
  const { data, errors, handleChange, onSubmit, handleReset, validateForm } =
    useForm(initialForm, schema, handleSubmit);

  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomForm
        title="Test Form"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
        to={ROUTES.SANDBOX}
      >
        <CustomInput
          label="first name"
          name="first"
          data={data}
          error={errors.first}
          onChange={handleChange}
        />
        <CustomInput
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onChange={handleChange}
        />
      </CustomForm>
    </Container>
  );
}
