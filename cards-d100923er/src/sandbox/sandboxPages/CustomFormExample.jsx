import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import Joi from "joi";

const schema = Joi.object({
 firstName: Joi.string().min(2),
 lastName: Joi.string().min(2).max(10),
});

export default function CustomFormExample() {
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
 });

 const [errors, setErrors] = useState({});

 const validateProperty = (name, value) => {
  // create object with only name and value
  // create joi object with this only name and the validation
  // do the validation
  // returm the error.detalis[0]. message Or null
  //
 };

 const handleChange = (event) => {
  setFormData((prev) => ({
   ...prev,
   [event.target.name]: event.target.value,
  }));
 };
 const handleSubmit = () => {
  const validateObj = schema.validate(formData);
  console.log(validateObj);
 };
 return (
  <Box>
   <Box component={Paper}>
    <TextField
     label="first name"
     value={formData.firstName}
     name="firstName"
     onChange={handleChange}
    />
    <TextField
     label="last name"
     value={formData.lastName}
     name="lastName"
     onChange={handleChange}
    />
    <Button onClick={handleSubmit}>sWWbmit</Button>
   </Box>
  </Box>
 );
}
