const CartItem = ({ cartItem }) => {
  return (
    <h3>
      {cartItem.name}, quantity: {cartItem.quantity}
    </h3>
  );
};

export default CartItem;
