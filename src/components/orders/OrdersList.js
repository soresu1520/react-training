import { PageDiv, PageTitle, TitleDiv } from "../../styles/StyledComponents";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OrdersTable from "./OdersTable";
import { useState, useEffect } from "react";
import { getOrders } from "../../server/API";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageDiv>
      <TitleDiv>
        <PageTitle>Orders</PageTitle>
        <ListAltIcon
          sx={{
            color: "var(--color-dark-icon)",
            fontSize: 50,
            marginLeft: "0.3em",
          }}
        ></ListAltIcon>
      </TitleDiv>
      <OrdersTable orders={orders}></OrdersTable>
    </PageDiv>
  );
};

export default OrdersList;
