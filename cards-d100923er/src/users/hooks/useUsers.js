import { useState, React, useCallback } from "react";
import { useUser } from "../providers/UserProvider";
import { login } from "../services/usersApiService";
import { setTokenInLocalStorage } from "../services/localStorageService";
import { Navigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { user, setUser, token, setToken } = useUser;

  const handleLogin = useCallback(
    async (user) => {
      try {
        setIsLoading(true);
        const response = await login(user);
        setToken(response);
        setTokenInLocalStorage(response);
        setUser(user);
        return <Navigate to={ROUTES.CARDS} replace />;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken, setUser]
  );

  return <div>useUsers</div>;
}
