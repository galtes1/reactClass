import { useState, useCallback } from "react";
import { useUser } from "../providers/UserProvider";
import {
  getUserData,
  login,
  signup,
  updateUser,
  updateUserBusinessStatus,
} from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizedExistingUser from "../helpers/normalization/normalizedExistingUser";

const useUsers = () => {
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { setUser, setToken } = useUser();
  const setSnack = useSnack();
  const [existingUser, setExistingUser] = useState([]);

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

  const handleUpdateUser = useCallback(
    async (user, userFromClient) => {
      setIsLoading(true);

      try {
        const normalizedUser = await updateUser(
          user._id,
          normalizedExistingUser(userFromClient)
        );
        setExistingUser(normalizedUser);
        setSnack(
          "success",
          `${normalizedUser.name.first} your details has been successfully updated`
        );
      } catch (error) {
        setError(error.message);
      }
      navigate(ROUTES.ROOT);
      setIsLoading(false);
    },
    [setSnack, navigate]
  );
  const handleChangeBusinessStatus = useCallback(
    async (user) => {
      try {
        const usersData = await updateUserBusinessStatus(user._id);
        setSnack(
          "success",
          `Business Status of User ${user.name.first} was changed sucessfully`
        );
        return usersData;
      } catch (err) {
        setError(err.message);
      }
    },
    [setSnack]
  );

  return {
    isLoading,
    error,
    existingUser,
    setExistingUser,
    handleUpdateUser,
    handleChangeBusinessStatus,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
  };
};

export default useUsers;
