import { jwtDecode } from "jwt-decode";
const TOKEN = "my token";

export const setTokenInLocalStorage = (encryptedToken) => {
 localStorage.setItem(TOKEN, encryptedToken);
};

export const removeTokenFromLocalStorage = () => localStorage.removeItem(TOKEN);

export const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN);

export const getUser = () => {
 try {
  const myToken = getTokenFromLocalStorage();
  return jwtDecode(myToken);
 } catch (err) {
  return null;
 }
};
