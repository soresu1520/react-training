export const calculatePrice = data => {
  const price = data.reduce((prevValue, item) => {
    return prevValue + item.quantity * item.price;
  }, 0);
  return price;
};
