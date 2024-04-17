import { useState, useCallback } from "react";
import { useUser } from "../providers/UserProvider";
import { login, signup } from "../services/usersApiService";
import {
 getUser,
 removeToken,
 setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

export default function useUsers() {
 const [isLoading, setIsLoading] = useState();
 const [error, setError] = useState(null);
 const { user, setUser, setToken } = useUser;
 const navigate = useNavigate();

 const handleLogin = useCallback(
  async (userLogin) => {
   setIsLoading(true);
   try {
    const token = await login(userLogin);
    setTokenInLocalStorage(token);
    setToken(token);
    setUser(getUser());
    navigate(ROUTES.CARDS);
   } catch (error) {
    setError(error.message);
   }
   setIsLoading(false);
  },
  [setToken, setUser, navigate]
 );
 const handleLogout = useCallback(() => {
  removeToken();
  setUser(null);
 }, [setUser]);

 const handleSignup = useCallback(
  async (userFromCLient) => {
   setIsLoading(true);
   try {
    const normalizedUser = normalizeUser(userFromCLient);
    await signup(normalizedUser);
    await handleLogin({
     email: userFromCLient.email,
     password: userFromCLient.password,
    });
   } catch (error) {
    setError(error.message);
   }
   setIsLoading(false);
  },
  [handleLogin]
 );

 return { handleLogin, handleLogout, handleSignup, user, error, isLoading };
}
