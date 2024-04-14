import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getCards = async () => {
 try {
  const response = await axios.get(apiUrl);
  const data = response.data;
  return data;
 } catch (err) {
  throw new Error(err.message);
 }
};

export const getCard = async (cardId) => {
 try {
  const response = await axios.get(`${apiUrl}` / `${cardId}`);
  const data = response.data;
  return data;
 } catch (err) {
  throw new Error(err.message);
 }
};
