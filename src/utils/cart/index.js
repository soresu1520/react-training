export const countItems = data => {
  const cartQuantity = data.reduce((prevValue, cartItem) => {
    return prevValue + cartItem.quantity;
  }, 0);
  return cartQuantity;
};

export const addToCart = (cart, product) => {
  const newCart = [...cart];
  const isInCart = cart.findIndex(e => e.productId === product.id);

  if (isInCart > -1) {
    newCart[isInCart].quantity = cart[isInCart].quantity + 1;
  } else {
    newCart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }
  return newCart;
};
