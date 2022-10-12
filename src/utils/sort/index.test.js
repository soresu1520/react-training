import { sortData, sortDates } from "./index";

const arrayWithDates = [
  { id: 1, date: "20/09/2022" },
  { id: 2, date: "21/10/2022" },
  { id: 3, date: "22/09/2022" },
];
const sortedArrayWithDates = [
  { id: 2, date: "21/10/2022" },
  { id: 3, date: "22/09/2022" },
  { id: 1, date: "20/09/2022" },
];

test("objects sorted by date in descending order", () => {
  expect(sortDates(arrayWithDates)).toEqual(sortedArrayWithDates);
});

const toBeSortedArray = [
  { name: "Cake", price: 5 },
  { name: "Tacos", price: 6 },
  { name: "Salad", price: 7 },
];
const sortedArrayByPriceDesc = [
  { name: "Salad", price: 7 },
  { name: "Tacos", price: 6 },
  { name: "Cake", price: 5 },
];
const sortedArrayByPriceAsc = [
  { name: "Cake", price: 5 },
  { name: "Tacos", price: 6 },
  { name: "Salad", price: 7 },
];
const sortedArrayByAlphAsc = [
  { name: "Cake", price: 5 },
  { name: "Salad", price: 7 },
  { name: "Tacos", price: 6 },
];
const sortedArrayByAlphDesc = [
  { name: "Tacos", price: 6 },
  { name: "Salad", price: 7 },
  { name: "Cake", price: 5 },
];

test("items sorted A-Z", () => {
  expect(sortData(toBeSortedArray, "alphabetAsc")).toEqual(sortedArrayByAlphAsc);
});

test("items sorted Z-A", () => {
  expect(sortData(toBeSortedArray, "alphabetDesc")).toEqual(sortedArrayByAlphDesc);
});

test("items sorted by price ascending", () => {
  expect(sortData(toBeSortedArray, "priceAsc")).toEqual(sortedArrayByPriceAsc);
});

test("items sorted by price descending", () => {
  expect(sortData(toBeSortedArray, "priceDesc")).toEqual(sortedArrayByPriceDesc);
});

test("items sorted by default", () => {
  expect(sortData(toBeSortedArray, "")).toEqual(sortedArrayByAlphAsc);
});
