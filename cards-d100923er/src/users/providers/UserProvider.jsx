import React, { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
 const user = {
  _id: "65424ae9a8d1eae12d31e360",
  isBusiness: true,
  isAdmin: false,
 };
 return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUsers = () => {
 const context = useContext(UserContext);
 if (!context) throw new Error("must use useUsers with a provider");
 return context;
};
