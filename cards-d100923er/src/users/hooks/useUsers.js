import { useState, useCallback } from "react";
import { useUser } from "../providers/UserProvider";
import { getUserData, login, signup } from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { setUser, setToken } = useUser();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setIsLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser, setIsLoading, setError]
  );

  const { setSnack } = useSnack;

  // const handleLogin = useCallback(
  //   async (user, isSigned = false) => {
  //     try {
  //       setIsLoading(true);
  //       const token = await login(user);
  //       setTokenInLocalStorage(token);
  //       setToken(token);
  //       const userFromLocalStorage = getUser();
  //       requestStatus(false, null, userFromLocalStorage);
  //       navigate(ROUTES.CARDS);
  //       isSigned
  //         ? setSnack("success", "SIGNED and LOGGED IN Successfully", "filled")
  //         : setSnack("success", "LOGGED IN Successfuly", "filled");
  //       return;
  //     } catch (error) {
  //       requestStatus(false, error, null);
  //     }
  //   },
  //   [navigate, requestStatus, setToken, setSnack]
  // );

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
        setSnack("error", "Incorrect email or password", "filled");
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, setSnack]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    // setSnack("success", "logged out👍", "filled");
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromCLient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromCLient);
        await signup(normalizedUser);
        await handleLogin(
          {
            email: userFromCLient.email,
            password: userFromCLient.password,
          },
          true
        );
      } catch (error) {
        setError(error.message);
        console.log(error);
        setSnack("error", error.message, "filled");
      }
      setIsLoading(false);
    },
    [handleLogin, setSnack]
  );

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    isLoading,
    error,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
  };
};

export default useUsers;
