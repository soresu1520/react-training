export const sortData = (data, criteria) => {
  switch (criteria) {
    case "alphabetAsc":
    default:
      //stworzenie nowej referencji, żeby zaktualizować state
      return [...data.sort((a, b) => a.name.localeCompare(b.name))];
    case "alphabetDesc":
      return [...data.sort((a, b) => b.name.localeCompare(a.name))];
    case "priceAsc":
      return [...data.sort((a, b) => a.price - b.price)];
    case "priceDesc":
      return [...data.sort((a, b) => b.price - a.price)];
  }
};
