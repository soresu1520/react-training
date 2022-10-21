import { useState, useEffect, useContext } from "react";
import { PageDiv, PageTitle, TitleDiv, Message, Button } from "../../styles/StyledComponents";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import SnackbarContext from "../../context/SnackbarContext";
import SnackbarMessage from "../other/SnackbarMessage";
import { calculatePrice } from "../../utils/calculate";

const ShoppingCart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [price, setPrice] = useState(0);
  const [messege, setMessege] = useState(0);
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);

  useEffect(() => {
    cart.length === 0 ? setMessege("Cart is empty") : setMessege("");
    setPrice(calculatePrice(cart).toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); //eslint-disable-line react-hooks/exhaustive-deps

  const addQuantity = productId => {
    let foundIndex = cart.findIndex(element => element.productId === productId);
    const updatedCart = [...cart];
    if (updatedCart[foundIndex].quantity < 100) {
      updatedCart[foundIndex].quantity++;
      setCart(updatedCart);
    } else {
      setSnackInfo({ open: true, message: "You cannnot order more than 99", type: "warning" });
    }
  };

  const subtractQuantity = productId => {
    let foundIndex = cart.findIndex(element => element.productId === productId);
    const updatedCart = [...cart];
    if (updatedCart[foundIndex].quantity > 1) {
      updatedCart[foundIndex].quantity--;
      setCart(updatedCart);
    } else if (updatedCart[foundIndex].quantity === 1) deleteItem(productId);
  };

  const deleteItem = productId => {
    setCart(prevState => prevState.filter(element => element.productId !== productId));
    setSnackInfo({ open: true, message: "Deleted item", type: "success" });
  };

  return (
    <PageDiv>
      <TitleDiv>
        <PageTitle>Your Cart</PageTitle>
        <ShoppingCartOutlinedIcon
          sx={{
            color: "var(--color-dark-icon)",
            fontSize: 40,
            marginLeft: "0.3em",
          }}
        ></ShoppingCartOutlinedIcon>
      </TitleDiv>

      {cart.length > 0 && (
        <CartDiv>
          <CartItemsDiv>
            {cart.map(cartItem => (
              <CartItem
                cartItem={cartItem}
                deleteItem={deleteItem}
                addQuantity={addQuantity}
                subtractQuantity={subtractQuantity}
                key={cartItem.productId}
              ></CartItem>
            ))}
          </CartItemsDiv>
          <CartPriceDiv>
            <PriceTitle>Total:</PriceTitle>
            <PriceTitle>{price} $</PriceTitle>
            <PriceSubtitle>
              Click the button below and go to your summary to finalize your oder
            </PriceSubtitle>
            <Link to="/summary">
              <Button>Summary</Button>
            </Link>
          </CartPriceDiv>
        </CartDiv>
      )}

      {!cart.length && <Message>{messege}</Message>}

      {snackInfo.open && <SnackbarMessage></SnackbarMessage>}
    </PageDiv>
  );
};

export default ShoppingCart;

const CartDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CartItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 65%;

  @media (max-width: 880px) {
    flex-basis: 100%;
    width: 100%;
    flex-flow: row wrap;
    gap: 3%;
    justify-content: center;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

const CartPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 25%;
  background: var(--color-greyscale-50);
  text-align: center;
  padding: 1.7em 1.2em;

  @media (max-width: 880px) {
    margin-top: 1em;
    width: 50%;
  }

  @media (max-width: 460px) {
    margin-top: 1em;
    width: 100%;
  }
`;

const PriceTitle = styled(PageTitle)`
  color: var(--color-brand-500);
`;

const PriceSubtitle = styled.h4`
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  color: var(--color-greyscale-600);
  margin: 0.5em 1em;
`;
