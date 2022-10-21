import styled from "styled-components";

const SummaryItem = ({ cartItem }) => {
  return (
    <SummaryItemDiv data-testid="summary-item">
      <Image src={`/assets/food/${cartItem.image}`} alt={cartItem.name} />
      <ItemText>{cartItem.name}</ItemText>
      <ItemTextSmallBasis>x{cartItem.quantity}</ItemTextSmallBasis>
      <ItemTextRight>{(cartItem.quantity * cartItem.price).toFixed(2)} $</ItemTextRight>
    </SummaryItemDiv>
  );
};

export default SummaryItem;

const SummaryItemDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 4em;
  width: 100%;
  padding: 0.5em 0.7em;

  @media (max-width: 550px) {
    flex-flow: column nowrap;
    height: 7em;
    flex-basis: 40%;
  }
`;

const ItemText = styled.h5`
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-heading);
  color: var(--dark-icon);
  margin-top: 0;
  margin-bottom: 0;
  flex-basis: 30%;
`;

const ItemTextSmallBasis = styled(ItemText)`
  flex-basis: 20%;
  text-align: center;
`;

const ItemTextRight = styled(ItemTextSmallBasis)`
  flex-basis: 20%;
  text-align: right;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  margin: 0;
  padding-right: 0.7em;

  @media (max-width: 550px) {
    height: 50%;
  }
`;
