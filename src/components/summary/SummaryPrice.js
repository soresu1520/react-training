import styled from "styled-components";

const SummaryPrice = ({ price, deliveryPrice }) => {
  return (
    <PriceDiv>
      <SubPriceDiv>
        <PriceText>Subtotal</PriceText>
        <PriceTextRight>{price} $</PriceTextRight>
      </SubPriceDiv>
      <SubPriceDiv>
        <PriceText>Delivery</PriceText>
        <PriceTextRight>{deliveryPrice.toFixed(2)} $</PriceTextRight>
      </SubPriceDiv>
      <Line></Line>
      <SubPriceDiv>
        <TotalText>Total</TotalText>
        <TotalTextRight data-testid="totalPrice">
          {(+price + deliveryPrice).toFixed(2)} $
        </TotalTextRight>
      </SubPriceDiv>
    </PriceDiv>
  );
};

export default SummaryPrice;

const PriceDiv = styled.div`
  background: var(--color-greyscale-50);
  padding: 1.5em;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
`;

const SubPriceDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 550px) {
    flex-flow: column nowrap;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid var(--color-dark-icon);
`;

const PriceText = styled.h4`
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  color: var(--color-greyscale-600);
  margin-top: 0;
  margin-bottom: 0.5em;
  flex-basis: 50%;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const PriceTextRight = styled(PriceText)`
  text-align: right;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const TotalText = styled.h2`
  color: var(--color-brand-500);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-heading);
  margin-top: 0.5em;
  margin-bottom: 0;
  flex-basis: 40%;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const TotalTextRight = styled(TotalText)`
  text-align: right;
  flex-basis: 60%;

  @media (max-width: 550px) {
    text-align: center;
  }
`;
