import { Box, Button, Container, Paper, TextField } from "@mui/material";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import CustomForm from "../../forms/components/CustomForm";

const schema = Joi.object({
 firstName: Joi.string().min(2),
 lastName: Joi.string().min(2).max(10),
});

const initialForm = {
 first: "",
 last: "",
};

const handleSubmit = (data) => {
 console.log(data);
};

export default function CustomFormExample() {
 const { errors, data, handleChange, handleReset, validateForm, onSubmit } =
  useForm(initialForm, schema, handleSubmit);

 return (
  <Container sx={{ mt: 10 }}>
   <Box component={Paper}>
    <CustomForm
     label="first name"
     value={data.first}
     name="first"
     onChange={handleChange}
     helperText={errors.first}
     error={Boolean(errors.first)}
    />
    <CustomForm
     label="last name"
     value={data.last}
     name="last"
     onChange={handleChange}
     helperText={errors.last}
     error={Boolean(errors.last)}
    />
    <Button onClick={handleSubmit}>sWWbmit</Button>
   </Box>
  </Container>
 );
}
