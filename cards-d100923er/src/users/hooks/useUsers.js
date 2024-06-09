// import { useState, useCallback } from "react";
// import { useUser } from "../providers/UserProvider";
// import { getUserData, login, signup } from "../services/usersApiService";
// import {
//  getUser,
//  removeTokenFromLocalStorage,
//  setTokenInLocalStorage,
// } from "../services/localStorageService";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../routes/routesModel";
// import normalizeUser from "../helpers/normalization/normalizeUser";
// import { useSnack } from "../../providers/SnackbarProvider";

// const useUsers = () => {
//  const [isLoading, setIsLoading] = useState();
//  const navigate = useNavigate();
//  const [error, setError] = useState(null);
//  const { setUser, setToken } = useUser();
//  const setSnack = useSnack();

//  const handleLogin = useCallback(
//   async (userLogin, isSigned = false) => {
//    try {
//     setIsLoading(true);
//     const token = await login(userLogin);
//     setTokenInLocalStorage(token);
//     setToken(token);
//     setUser(getUser());
//     navigate(ROUTES.CARDS);
//     isSigned
//      ? setSnack("success", "filled", "logged in 👍")
//      : setSnack("success", "LOGGED IN Successfuly", "filled");
//     //return;
//    } catch (error) {
//     setError(error.message);
//     setSnack("error", error.message, "filled");
//     setIsLoading(false);
//    }
//    setIsLoading(false);
//   },
//   [setToken, setUser, navigate, setSnack]
//  );

//  const handleLogout = useCallback(() => {
//   removeTokenFromLocalStorage();
//   setUser(null);
//   setSnack("success", "logged out👍", "filled");
//  }, [setUser, setSnack]);

//  const handleSignup = useCallback(
//   async (userFromCLient) => {
//    setIsLoading(true);
//    try {
//     const normalizedUser = normalizeUser(userFromCLient);
//     await signup(normalizedUser);
//     await handleLogin(
//      {
//       email: userFromCLient.email,
//       password: userFromCLient.password,
//      },
//      true
//     );
//    } catch (error) {
//     setError(error.message);
//     console.log(error);
//     setSnack("error", error.message, "filled");
//    }
//    setIsLoading(false);
//   },
//   [handleLogin, setSnack]
//  );

//  const handleGetUser = useCallback(async (id) => {
//   setIsLoading(true);
//   try {
//    const userData = await getUserData(id);
//    setIsLoading(false);
//    return userData;
//   } catch (error) {
//    setError(error.message);
//   }
//  }, []);

//  return {
//   isLoading,
//   error,
//   handleLogin,
//   handleLogout,
//   handleSignup,
//   handleGetUser,
//  };
// };

// export default useUsers;
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
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setUser, setToken } = useUser();
  const setSnack = useSnack();

  const handleLogin = useCallback(
    async (userLogin) => {
      try {
        setIsLoading(true);
        const token = await login(userLogin);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
        setSnack("success", "LOGGED IN Successfuly");
      } catch (error) {
        setError(error.message);
        setSnack("error", "Incorrect email or password");
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, setSnack]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    setSnack("success", "logged out👍");
    navigate(ROUTES.CARDS);
  }, [setUser, setSnack, navigate]);

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
        setSnack("error", "filled");
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
