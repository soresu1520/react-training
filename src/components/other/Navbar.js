import styled from "styled-components";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const Navbar = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getQuantity();
  });

  const getQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartQuantity = cart.reduce((prevValue, cartItem) => {
      return prevValue + cartItem.quantity;
    }, 0);
    setQuantity(cartQuantity);
  };

  return (
    <DivHeader>
      <Header>
        <DivImage>
          <Link to="/">
            <img src="/assets/icon.png" alt="logo" />
          </Link>
        </DivImage>
        <Title>Click and Eat</Title>
        <DivIcon>
          <Link to="/orders">
            <ReorderIcon sx={navbarIcon}></ReorderIcon>
          </Link>
          <Link to="/cart">
            <StyledBadge badgeContent={quantity} max={99}>
              <ShoppingCartOutlinedIcon sx={navbarIcon}></ShoppingCartOutlinedIcon>
            </StyledBadge>
          </Link>
        </DivIcon>
      </Header>
    </DivHeader>
  );
};

export default Navbar;

const DivHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  background-color: var(--color-white);
  z-index: 999;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  flex-flow: row wrap;
  margin-left: 3em;
  margin-right: 3em;
`;

const DivImage = styled.div`
  flex: 1;
  margin-top: 0.3em;
`;

const Title = styled.h1`
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-heading);
  color: var(--dark-icon);
  text-align: center;
  margin: 0 auto;
  flex: 1;
`;

const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row wrap;
  flex: 1;
`;

export const navbarIcon = {
  color: "var(--color-dark-icon)",
  fontSize: 40,
  marginLeft: "0.25em",
  marginRight: "0.25em",
};

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "var(--color-dark-icon)",
    backgroundColor: "var(--color-brand-300)",
  },
});
