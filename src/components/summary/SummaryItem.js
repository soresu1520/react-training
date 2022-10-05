import styled from "styled-components";

const SummaryItem = ({ cartItem }) => {
  return (
    <SummaryItemDiv>
      <Image src={`/assets/food/${cartItem.image}`} alt={cartItem.name} />
      <ItemText>{cartItem.name}</ItemText>
      <SmallItemText>x{cartItem.quantity}</SmallItemText>
      <SmallItemText>{(cartItem.quantity * cartItem.price).toFixed(2)} $</SmallItemText>
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
`;

const ItemText = styled.h5`
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-heading);
  color: var(--dark-icon);
  margin-top: 0;
  margin-bottom: 0;
  flex-basis: 35%;
`;

const SmallItemText = styled(ItemText)`
  flex-basis: 25%;
  text-align: center;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  margin: 0;
  padding-right: 0.7em;
`;
