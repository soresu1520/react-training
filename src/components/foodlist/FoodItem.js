import styled from "styled-components";
import SnackbarMessage from "../other/SnackbarMessage";
import { useContext } from "react";
import SnackbarContext from "../../context/SnackbarContext";
import { Button } from "../../styles/StyledComponents";

const FoodItem = ({ foodItem }) => {
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);

  const addItemToCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const isInCart = cart.findIndex(e => e.productId === foodItem.id);
      if (isInCart > -1) {
        cart[isInCart].quantity = cart[isInCart].quantity + 1;
      } else {
        cart.push({
          productId: foodItem.id,
          name: foodItem.name,
          price: foodItem.price,
          categoryId: foodItem.categoryId,
          image: foodItem.image,
          quantity: 1,
        });
      }
      setSnackInfo({ open: true, message: "Item added to cart!", type: "success" });
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.log(e);
      setSnackInfo({ open: true, message: "Error. Try Again", type: "error" });
    }
  };

  return (
    <DivCard>
      <DivTitle>
        <CardTitle>{foodItem.name}</CardTitle>
        <CardSubtitle>$ {foodItem.price.toFixed(2)}</CardSubtitle>
      </DivTitle>
      <Image src={`/assets/food/${foodItem.image}`} alt={foodItem.name} />
      <DivButton>
        <Button onClick={addItemToCart}>Add to cart</Button>
      </DivButton>
      {snackInfo.open === true ? <SnackbarMessage></SnackbarMessage> : <div></div>}
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
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  algin-items: center;
`;