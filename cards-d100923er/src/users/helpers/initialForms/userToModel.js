const userToModel = (UserData) => {
  return {
    first: UserData.name.first,
    middle: UserData.name.middle,
    last: UserData.name.last,
    phone: UserData.phone,
    url: UserData.image.url,
    alt: UserData.image.alt,
    country: UserData.address.country,
    state: UserData.address.state,
    city: UserData.address.city,
    street: UserData.address.street,
    houseNumber: UserData.address.houseNumber,
    zip: UserData.address.zip,
  };
};

export default userToModel;
