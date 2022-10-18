export const countItems = data => {
  const cartQuantity = data.reduce((prevValue, cartItem) => {
    return prevValue + cartItem.quantity;
  }, 0);
  return cartQuantity;
};
