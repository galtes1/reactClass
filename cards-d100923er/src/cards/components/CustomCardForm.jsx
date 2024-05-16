import React from "react";

import CustomForm from "../../forms/components/CustomForm";
import CustomInput from "../../forms/components/CustomInput";
import ROUTES from "../../routes/routesModel";

const CustomCardForm = ({
  title,
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
}) => {
  return (
    <CustomForm
      title={title}
      onReset={onReset}
      errors={errors}
      validateForm={validateForm}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
      onSubmit={onSubmit}
    >
      <CustomInput
        name="title"
        label="title"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <CustomInput
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <CustomInput
        name="description"
        label="description"
        error={errors.description}
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
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <CustomInput
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <CustomInput
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />

      <CustomInput
        name="country"
        label="country"
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
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <CustomInput
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </CustomForm>
  );
};

export default React.memo(CustomCardForm);
