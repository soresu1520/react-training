import axios from "axios";
import configServer from "./config.json";

export function getAllFood() {
  return axios.get(`${configServer.SERVER_URL}food`);
}

export function getCategories() {
  return axios.get(`${configServer.SERVER_URL}category`);
}

export function getOrders() {
  return axios.get(`${configServer.SERVER_URL}orders`);
}
