import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorageService";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/";

export const login = async (userLogin) => {
  try {
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(apiUrl, normalizedUser);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${id}`, {
      headers: { "x-auth-token": getTokenFromLocalStorage() },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (id, normalizedExistingUser) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/${id}`,
      normalizedExistingUser,
      {
        headers: {
          "x-auth-token": getTokenFromLocalStorage(),
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.message.data);
  }
};

export const updateUserBusinessStatus = async (id) => {
  try {
    const { data } = await axios.patch(
      `${apiUrl}/${id}`,
      {},
      {
        headers: {
          "x-auth-token": getTokenFromLocalStorage(),
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.message.data);
  }
};
