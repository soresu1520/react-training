import { getAllFood, getCategories, getOrders } from "./API";
import { sortDates, sortData } from "../utils/sort";

export const fetchOrders = async () => {
  try {
    const response = await getOrders();
    const orders = sortDates(response.data);
    return { orders: orders, message: "" };
  } catch (error) {
    console.error(error);
    return { orders: [], message: "Error. Try again" };
  }
};

export const fetchAllFood = async sortCriteria => {
  try {
    const response = await getAllFood();
    const food = sortData(response.data, sortCriteria);
    return { food: food, message: "" };
  } catch (error) {
    console.error(error);
    return { food: [], message: "Error. Try again" };
  }
};

export const fetchCategories = async () => {
  try {
    const response = await getCategories();
    const sortedCategories = response.data.sort((a, b) =>
      a.categoryName.localeCompare(b.categoryName)
    );
    return sortedCategories;
  } catch (error) {
    console.error(error);
  }
};
