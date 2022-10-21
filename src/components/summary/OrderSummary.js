import { useState, useEffect } from "react";
import { PageDiv, PageTitle, PageSubtitle, TitleDiv, Message } from "../../styles/StyledComponents";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";
import SummaryPrice from "./SummaryPrice";
import SummaryForm from "./SummaryForm";
import { v4 as uuid } from "uuid";
import { postOrder } from "../../server/API";
import SnackbarMessage from "../other/SnackbarMessage";
import { useContext } from "react";
import SnackbarContext from "../../context/SnackbarContext";
import { useNavigate } from "react-router-dom";
import { calculatePrice } from "../../utils/calculate";

const OrderSummary = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const deliveryPrice = 2;
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState("PayPal");
  const [message, setMessage] = useState(0);
  const [snackInfo, setSnackInfo] = useContext(SnackbarContext);

  useEffect(() => {
    cart.length === 0 ? setMessage("Cart is empty") : setMessage("");
    setPrice(calculatePrice(cart).toFixed(2));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const handlePayment = (e, newPayment) => {
    setPayment(newPayment);
  };

  const onSubmit = async data => {
    const newDate = new Date().toLocaleDateString("en-GB");
    data = {
      ...data,
      id: uuid().slice(0, 8).toUpperCase(),
      payment: payment,
      price: +price + +deliveryPrice,
      date: newDate,
      items: cart,
    };

    try {
      await postOrder(data);
      setSnackInfo({ open: true, message: "Order successful", type: "success" });
      localStorage.removeItem("cart");
      navigate("/");
    } catch (e) {
      console.log(e);
      setSnackInfo({ open: true, message: "Order failed", type: "error" });
    }
  };

  return (
    <PageDiv>
      {!message && (
        <SummaryPageDiv>
          <SummaryContentDiv>
            <SummaryTitleDiv>
              <FormTitleDiv>
                <PageTitle>Form</PageTitle>
                <ModeEditOutlineOutlinedIcon
                  sx={{
                    color: "var(--color-dark-icon)",
                    fontSize: 40,
                    marginLeft: "0.3em",
                  }}
                ></ModeEditOutlineOutlinedIcon>
              </FormTitleDiv>
              <PageSubtitle>Fill out the form so that we can deliver your food to you</PageSubtitle>
            </SummaryTitleDiv>
            <SummaryForm
              payment={payment}
              handlePayment={handlePayment}
              onSubmit={onSubmit}
            ></SummaryForm>
          </SummaryContentDiv>

          <SummaryContentDiv>
            <SummaryTitleDiv>
              <TitleDiv>
                <PageTitle>Summary</PageTitle>
                <GradingOutlinedIcon
                  sx={{
                    color: "var(--color-dark-icon)",
                    fontSize: 40,
                    marginLeft: "0.3em",
                  }}
                ></GradingOutlinedIcon>
              </TitleDiv>
            </SummaryTitleDiv>
            <ItemsDiv>
              {cart.map(cartItem => (
                <SummaryItem cartItem={cartItem} key={cartItem.productId}></SummaryItem>
              ))}
            </ItemsDiv>

            <SummaryPriceDiv>
              <SummaryPrice price={price} deliveryPrice={deliveryPrice}></SummaryPrice>
            </SummaryPriceDiv>
          </SummaryContentDiv>
        </SummaryPageDiv>
      )}

      {snackInfo.open && <SnackbarMessage />}

      {!cart.length && <Message>{message}</Message>}
    </PageDiv>
  );
};

export default OrderSummary;

const SummaryPageDiv = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  gap: 5%;

  @media (max-width: 1000px) {
    flex-flow: column;
    align-items: center;
  }
`;

const SummaryTitleDiv = styled.div`
  flex-basis: 50%;
`;

const SummaryContentDiv = styled(SummaryTitleDiv)`
  margin-top: 1em;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const FormTitleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  border: 1px solid var(--color-greyscale-200);
  margin-top: 2.1em;

  @media (max-width: 1000px) {
    margin-top: 1em;
  }

  @media (max-width: 550px) {
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
`;

const SummaryPriceDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;
