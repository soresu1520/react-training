import { getOrders } from "./API";
import { sortDates } from "../utils/sort";

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
