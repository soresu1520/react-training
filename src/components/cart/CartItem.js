import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { SecondaryButton } from "../../styles/StyledComponents";

const CartItem = ({ cartItem, changeQuantity, deleteItem }) => {
  return (
    <CartItemDiv>
      <Image src={`/assets/food/${cartItem.image}`} alt={cartItem.name} />
      <CartTitleDiv>
        <CartItemTitle>{cartItem.name}</CartItemTitle>
        <CartItemSubtitle>Price: {cartItem.price.toFixed(2)} $</CartItemSubtitle>
        <CartItemSubtitle>Quantity: {cartItem.quantity}</CartItemSubtitle>
        <CartItemPrice>Total: {(cartItem.quantity * cartItem.price).toFixed(2)} $</CartItemPrice>
      </CartTitleDiv>
      <QuantityDiv>
        <QuantityButton onClick={() => changeQuantity(cartItem.productId, "SUB")}>–</QuantityButton>
        <QuantityText>{cartItem.quantity}</QuantityText>
        <QuantityButton onClick={() => changeQuantity(cartItem.productId, "ADD")}>+</QuantityButton>
      </QuantityDiv>
      <DeleteOutlineOutlinedIcon
        onClick={() => deleteItem(cartItem.productId)}
        sx={{
          color: "var(--color-dark-icon)",
          fontSize: 35,
          flexBasis: "10%",
          cursor: "pointer",
        }}
      ></DeleteOutlineOutlinedIcon>
    </CartItemDiv>
  );
};

export default CartItem;

const CartItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-light-200);
  width: 100%;
  height: 7em;
  padding: 0;
  margin-bottom: 0.7em;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  margin: 0;
`;

const CartTitleDiv = styled.div`
  margin-left: 0.7em;
  flex-basis: 50%;
`;

const CartItemTitle = styled.h4`
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  color: var(--dark-icon);
  margin-top: 0;
  margin-bottom: 0;
`;

const CartItemSubtitle = styled.h5`
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-heading);
  color: var(--color-greyscale-600);
  margin-top: 0;
  margin-bottom: 0;
`;

const CartItemPrice = styled.h4`
  color: var(--color-brand-500);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  margin-top: 0.5em;
  margin-bottom: 0;
`;

const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const QuantityText = styled.h4`
  color: var(--color-brand-500);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  text-align: center;
  width: 3em;
`;

const QuantityButton = styled(SecondaryButton)`
  border-radius: 0;
  font-size: 2em;
  font-weight: 400;
  padding: 0 0.25em;
`;
