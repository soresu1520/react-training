export const PAYMENT_METHODS = [
  { name: "PayPal", img: "paypal.svg" },
  { name: "PayU", img: "payu.svg" },
  { name: "Blik", img: "blik.svg" },
];

export const defaultFormValues = {
  id: "",
  firstName: "",
  lastName: "",
  street: "",
  building: "",
  city: "",
  zip: "",
  email: "",
  phoneNumber: "",
  notes: "",
  payment: "PayPal",
  price: 0,
  date: "",
  items: [],
};
