import { useState } from "react";
import { PageDiv, PageTitle, TitleDiv, Message } from "../../styles/StyledComponents";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  return (
    <PageDiv>
      <TitleDiv>
        <PageTitle>Your Cart</PageTitle>
        <ShoppingCartOutlinedIcon
          sx={{
            color: "var(--color-dark-icon)",
            fontSize: 50,
            marginLeft: "0.3em",
          }}
        ></ShoppingCartOutlinedIcon>
      </TitleDiv>
      {console.log(cart)}
      <CartDiv>
        {cart.length > 0 ? (
          cart.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.productId}></CartItem>)
        ) : (
          <Message>Koszyk jest pusty</Message>
        )}
      </CartDiv>
    </PageDiv>
  );
};

export default ShoppingCart;

const CartDiv = styled.div``;
