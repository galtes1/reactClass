import { useState, useCallback } from "react";
import { useUser } from "../providers/UserProvider";
import { login, signup } from "../services/usersApiService";
import {
 getUser,
 removeTokenFromLocalStorage,
 setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
 const [isLoading, setIsLoading] = useState();
 const [error, setError] = useState(null);
 const navigate = useNavigate();
 const { setUser, setToken } = useUser();

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
  removeTokenFromLocalStorage();
  setUser(null);
 }, [setUser]);

 const handleSignup = useCallback(
  async (userFromCLient) => {
   setIsLoading(true);
   //console.log(userFromCLient);
   try {
    const normalizedUser = normalizeUser(userFromCLient);
    await signup(normalizedUser);
    await handleLogin({
     email: userFromCLient.email,
     password: userFromCLient.password,
    });
   } catch (error) {
    setError(error.message);
    console.log(error);
   }
   setIsLoading(false);
  },
  [handleLogin]
 );

 return { isLoading, error, handleLogin, handleLogout, handleSignup };
};

export default useUsers;
