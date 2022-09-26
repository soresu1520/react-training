import styled from "styled-components";
import { getCartItem, postToCart } from "../server/API";
import SnackbarMessage from "../other/SnackbarMessage";
import { useContext } from "react";
import SnackbarContext from "../context/SnackbarContext";

const FoodItem = ({ foodItem }) => {
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);

  const addItemToCart = async () => {
    const foodObject = { ...foodItem, quantity: 1 };
    let isInCart = false;

    try {
      await getCartItem(foodItem.id);
      isInCart = true;
    } catch (error) {
      console.log(error);
      if (error.response.status === "404") {
        isInCart = false;
      }
    }

    try {
      if (!isInCart) {
        await postToCart(foodObject);
        setSnackInfo({ open: true, message: "Item added to cart!", type: "success" });
      } else {
        setSnackInfo({ open: true, message: "Item is already in the cart!", type: "info" });
      }
    } catch (error) {
      console.error(error);
      setSnackInfo({ open: true, message: "Item couldn't be added to cart", type: "error" });
    }
  };

  return (
    <DivCard>
      <DivTitle>
        <CardTitle>{foodItem.name}</CardTitle>
        <CardSubtitle>$ {foodItem.price.toFixed(2)}</CardSubtitle>
      </DivTitle>
      <Image src={require(`../assets/${foodItem.image}`)} alt="pancakes" />
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
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-dark-icon);
  margin-bottom: 0.1em;
  margin-top: 0.5em;
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
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

const Button = styled.button`
  background: var(--color-brand-300);
  color: var(--color-dark-icon);
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  cursor: pointer;
`;
