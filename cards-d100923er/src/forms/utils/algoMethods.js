export default function algoMethods() {
  const makeFirstLetterCapital = (text) => {
    if (typeof text !== "string") {
      text = String(text);
    }
    const term = text.toUpperCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
  };
  return { makeFirstLetterCapital };
}
