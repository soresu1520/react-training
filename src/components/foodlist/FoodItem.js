import styled from "styled-components";
import SnackbarMessage from "../other/SnackbarMessage";
import { addToCart } from "../../utils/cart";
import { useContext } from "react";
import SnackbarContext from "../../context/SnackbarContext";
import { Button } from "../../styles/StyledComponents";
import { useState } from "react";
import FoodModal from "./FoodModal";

const FoodItem = ({ foodItem }) => {
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItemToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = addToCart(cart, foodItem);
    setSnackInfo({ open: true, message: "Item added to cart!", type: "success" });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <DivCard data-testid="food-card">
      <DivTitle>
        <CardTitle onClick={handleClickOpen}>{foodItem.name}</CardTitle>
        <CardSubtitle>$ {foodItem.price.toFixed(2)}</CardSubtitle>
      </DivTitle>
      <Image src={`/assets/food/${foodItem.image}`} alt={foodItem.name} onClick={handleClickOpen} />
      <DivButton>
        <Button onClick={addItemToCart} data-testid={`add-${foodItem.id}`}>
          Add to cart
        </Button>
      </DivButton>
      {snackInfo.open && <SnackbarMessage></SnackbarMessage>}
      <FoodModal open={open} onClose={handleClose} food={foodItem} />
    </DivCard>
  );
};

export default FoodItem;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 18%;
  background: var(--color-white);
  border: 1px solid var(--color-light-200);
  margin-bottom: 2em;

  @media (max-width: 850px) {
    flex-basis: 22%;
  }

  @media (max-width: 780px) {
    flex-basis: 28%;
  }

  @media (max-width: 610px) {
    flex-basis: 40%;
  }

  @media (max-width: 496px) {
    flex-basis: 90%;
  }
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1em;
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-heading-light);
  color: var(--color-dark-icon);
  margin-bottom: 0.1em;
  margin-top: 0.5em;
  cursor: pointer;
`;

const CardSubtitle = styled.h4`
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading-light);
  color: var(--color-brand-500);
  margin-top: 0.1em;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-items: center;
`;
