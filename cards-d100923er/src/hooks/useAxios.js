import { useEffect } from "react";
import axios from "axios";
import { useUser } from "../users/providers/UserProvider";
import { useSnack } from "../providers/SnackbarProvider";

export default function useAxios() {
 const { token } = useUser();
 const { setSnack } = useSnack();

 useEffect(() => {
  axios.defaults.headers.common["x-auth-token"] = token;

  const requestInterseptor = axios.interceptors.request.use((data) => {
   console.log("request in");
   return Promise.resolve(data);
  });

  const responseInterseptor = axios.interceptors.request.use(null, (error) => {
   if (error.message) setSnack("error", error.message);
   return Promise.reject(error);
  });
  return () => {
   axios.interceptors.request.eject(requestInterseptor);
   axios.interceptors.response.eject(responseInterseptor);
  };
 }, [token, setSnack]);
}
