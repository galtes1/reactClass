export default function algoMethods() {
 const makeFirstLetterCapital = (text) => {
  if (typeof text !== "string") {
   text = String(text);
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
 };
 return { makeFirstLetterCapital };
}
