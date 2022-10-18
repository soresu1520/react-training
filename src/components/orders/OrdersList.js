import { PageDiv, PageTitle, TitleDiv } from "../../styles/StyledComponents";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OrdersTable from "./OdersTable";
import { useState, useEffect } from "react";
import { Message } from "../../styles/StyledComponents";
import { fetchOrders } from "../../server/fetch";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchOrders();
      setOrders(data.orders);
      setMessage(data.message);
    };
    fetch();
  }, []);

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
      {!message &&
        (orders.length ? (
          <OrdersTable orders={orders}></OrdersTable>
        ) : (
          <Message data-testid="no-orders">There are no orders</Message>
        ))}
      {message && <Message data-testid="orders-loading">{message}</Message>}
    </PageDiv>
  );
};

export default OrdersList;
