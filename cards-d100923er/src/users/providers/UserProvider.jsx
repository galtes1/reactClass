import React, {
 createContext,
 useContext,
 useMemo,
 useState,
 useEffect,
} from "react";
import {
 getTokenFromLocalStorage,
 getUser,
} from "../services/localStorageService";

const UserContext = createContext();

export default function UserProvider({ children }) {
 const [user, setUser] = useState(null);
 const [token, setToken] = useState(getTokenFromLocalStorage());

 useEffect(() => {
  if (!user) {
   const userFromLocalStorage = getUser();
   setUser(userFromLocalStorage);
  }
 }, [user]);

 const value = useMemo(
  () => ({ user, setUser, token, setToken }),
  [user, token]
 );
 return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
 const context = useContext(UserContext);
 if (!context) throw new Error("must use useUsers with a provider");
 return context;
};
