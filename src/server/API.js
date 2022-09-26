import axios from "axios";

export function getAllFood() {
  return axios.get(`http://localhost:3000/food`);
}

export function getFood(url) {
  return axios.get(`http://localhost:3000/food${url}`);
}

export function postToCart(item) {
  return axios.post(`http://localhost:3000/cart`, item);
}

export function putToCart(id, item) {
  return axios.put(`http://localhost:3000/cart/${id}`, item);
}

export function getCartItems() {
  return axios.get("http://localhost:3000/cart");
}

export function getCartItem(id) {
  return axios.get(`http://localhost:3000/cart/${id}`);
}
