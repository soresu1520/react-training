import { PageDiv, PageTitle, TitleDiv } from "../../styles/StyledComponents";
import ReorderIcon from "@mui/icons-material/Reorder";

const OrdersList = () => {
  return (
    <PageDiv>
      <TitleDiv>
        <PageTitle>Orders</PageTitle>
        <ReorderIcon
          sx={{
            color: "var(--color-dark-icon)",
            fontSize: 50,
            marginLeft: "0.3em",
          }}
        ></ReorderIcon>
      </TitleDiv>
    </PageDiv>
  );
};

export default OrdersList;
