import React, { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
 const [user, setUser] = useState();
 const [token, setToken] = useState();
 const value = useMemo(() => ({ user, setUser, token, setToken }), []);
 return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
 const context = useContext(UserContext);
 if (!context) throw new Error("must use useUsers with a provider");
 return context;
};
