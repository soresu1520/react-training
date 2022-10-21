import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { SecondaryButton } from "../../styles/StyledComponents";

const CartItem = ({ cartItem, deleteItem, addQuantity, subtractQuantity }) => {
  return (
    <CartItemDiv data-testid="cart-item">
      <Image src={`/assets/food/${cartItem.image}`} alt={cartItem.name} />
      <CartTitleDiv>
        <CartItemTitle>{cartItem.name}</CartItemTitle>
        <CartItemSubtitle>Price: {cartItem.price.toFixed(2)} $</CartItemSubtitle>
        <CartItemSubtitle data-testid={`quantity-${cartItem.productId}`}>
          Quantity: {cartItem.quantity}
        </CartItemSubtitle>
        <CartItemPrice>Total: {(cartItem.quantity * cartItem.price).toFixed(2)} $</CartItemPrice>
      </CartTitleDiv>
      <QuantityDiv>
        <QuantityButton
          onClick={() => subtractQuantity(cartItem.productId)}
          data-testid={`sub-${cartItem.productId}`}
        >
          –
        </QuantityButton>
        <QuantityText>{cartItem.quantity}</QuantityText>
        <QuantityButton
          onClick={() => addQuantity(cartItem.productId)}
          data-testid={`add-${cartItem.productId}`}
        >
          +
        </QuantityButton>
      </QuantityDiv>
      <DeleteOutlineOutlinedIcon
        onClick={() => deleteItem(cartItem.productId)}
        sx={{
          color: "var(--color-dark-icon)",
          fontSize: 35,
          flexBasis: "10%",
          cursor: "pointer",
        }}
        data-testid={`delete-${cartItem.productId}`}
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

  @media (max-width: 880px) {
    flex-direction: column;
    height: 21em;
    flex-basis: 30%;
  }

  @media (max-width: 650px) {
    flex-basis: 47%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  margin: 0;

  @media (max-width: 880px) {
    height: 30%;
    margin-top: 0.5em;
  }

  @media (max-width: 460px) {
    width: 50%;
    heigth: auto;
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

  @media (max-width: 880px) {
    text-align: center;
  }
`;

const CartItemSubtitle = styled.h5`
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-heading);
  color: var(--color-greyscale-600);
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 880px) {
    text-align: center;
  }
`;

const CartItemPrice = styled.h4`
  color: var(--color-brand-500);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  margin-top: 0.5em;
  margin-bottom: 0;

  @media (max-width: 880px) {
    text-align: center;
  }
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
