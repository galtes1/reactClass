export default function algoMethods() {
  const makeFirstLetterCapital = (text) => {
    if (typeof text !== "string") {
      text = String(text);
    }
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const makeAllLettersCapital = (text) => {
    if (typeof text !== "string") {
      text = String(text);
    }
    const term = text.toUpperCase().trim();
    return term.toUpperCase();
  };
  return { makeFirstLetterCapital, makeAllLettersCapital };
}
