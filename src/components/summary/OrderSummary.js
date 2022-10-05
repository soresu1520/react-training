import { useState, useEffect } from "react";
import { PageDiv, PageTitle, PageSubtitle, TitleDiv } from "../../styles/StyledComponents";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";
import SummaryPrice from "./SummaryPrice";
import SummaryForm from "./SummaryForm";
import { defaultFormValues } from "./defaultValues";

const OrderSummary = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [price, setPrice] = useState(0);
  const [form, setForm] = useState(defaultFormValues);

  useEffect(() => {
    calculatePrice();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const calculatePrice = () => {
    const cartPrice = cart.reduce((prevValue, cartItem) => {
      return prevValue + cartItem.quantity * cartItem.price;
    }, 0);
    setPrice(cartPrice.toFixed(2));
  };

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handlePayment = (e, newPayment) => {
    setForm({ ...form, payment: newPayment });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setForm({ ...form, data: new Date(), items: [...cart] });
    console.log("submitted");
  };

  return (
    <PageDiv>
      <SummaryPageDiv>
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
      </SummaryPageDiv>

      <SummaryPageDiv>
        <SummaryContentDiv>
          <SummaryForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            form={form}
            handlePayment={handlePayment}
          ></SummaryForm>
        </SummaryContentDiv>

        <SummaryContentDiv>
          <ItemsDiv>
            {cart.map(cartItem => (
              <SummaryItem cartItem={cartItem} key={cartItem.productId}></SummaryItem>
            ))}
          </ItemsDiv>

          <SummaryPriceDiv>
            <SummaryPrice price={price}></SummaryPrice>
          </SummaryPriceDiv>
        </SummaryContentDiv>
      </SummaryPageDiv>
    </PageDiv>
  );
};

export default OrderSummary;

const SummaryPageDiv = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  gap: 5%;
`;

const SummaryTitleDiv = styled.div`
  flex-basis: 50%;
`;

const SummaryContentDiv = styled(SummaryTitleDiv)`
  margin-top: 1em;
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
`;

const SummaryPriceDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;
