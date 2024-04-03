import Joi from "joi";
import { useState } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
 const [data, setData] = useState(initialForm);
 const [errors, setErrors] = useState();

 const validateProperty = (name, value) => {
  const objToValidate = { [name]: value };
  const { error } = schema.validate(objToValidate);
  if (error) {
   setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error.details[0].message,
   }));
  } else {
   setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: null,
   }));
  }
 };
 const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  const errorMessage = validateProperty(name, value);
  if (errorMessage) {
   setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  } else {
   setErrors((prev) => {
    let obj = { ...prev };
    delete obj[name];
    return obj;
   });
  }
  setData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleReset = () => {
  setData(initialForm);
  setErrors({});
 };
 const validateForm = () => {
  const schemaForValidate = Joi.object(schema);
  const { error } = schemaForValidate.validate(data);
  if (error) return false;
  return true;
 };

 const onSubmit = () => {
  handleSubmit(data);
 };

 return {
  errors,
  data,
  validateProperty,
  handleChange,
  handleReset,
  validateForm,
  onSubmit,
 };
}
