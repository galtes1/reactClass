import React from "react";
import CustomForm from "../../forms/components/CustomForm";
import ROUTES from "../../routes/routesModel";
import CustomInput from "../../forms/components/CustomInput";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";

export default function CustomSignUpForm({
 onSubmit,
 onReset,
 validateForm,
 title,
 errors,
 data,
 onInputChange,
 handleChangeCheckBox,
}) {
 return (
  <CustomForm
   onSubmit={onSubmit}
   onReset={onReset}
   validateForm={validateForm}
   title={title}
   styles={{ maxWidth: "800px" }}
   to={ROUTES.ROOT}
  >
   <CustomInput
    name="first"
    label="first name"
    error={errors.first}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="middle"
    label="middle name"
    error={errors.middle}
    onChange={onInputChange}
    data={data}
    sm={6}
    required={false}
   />
   <CustomInput
    name="last"
    label="last name"
    error={errors.last}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="phone"
    label="phone"
    type="phone"
    error={errors.phone}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="email"
    label="email"
    type="email"
    error={errors.email}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="password"
    label="password"
    type="password"
    error={errors.password}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="url"
    label="image url"
    error={errors.url}
    onChange={onInputChange}
    data={data}
    sm={6}
    required={false}
   />
   <CustomInput
    name="alt"
    label="image alt"
    error={errors.alt}
    onChange={onInputChange}
    data={data}
    sm={6}
    required={false}
   />
   <CustomInput
    label="country"
    name="country"
    error={errors.country}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="state"
    label="state"
    error={errors.state}
    onChange={onInputChange}
    data={data}
    sm={6}
    required={false}
   />

   <CustomInput
    name="city"
    label="city"
    error={errors.city}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="street"
    label="street"
    error={errors.street}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="houseNumber"
    label="house Number"
    type="number"
    error={errors.houseNumber}
    onChange={onInputChange}
    data={data}
    sm={6}
   />
   <CustomInput
    name="zip"
    label="zip"
    error={errors.zip}
    onChange={onInputChange}
    data={data}
    sm={6}
    required={false}
   />
   <Grid item>
    <FormControlLabel
     onChange={handleChangeCheckBox}
     name="isBusiness"
     control={<Checkbox value={data.isBusiness} color="primary" />}
     label="business?"
    />
   </Grid>
  </CustomForm>
 );
}
