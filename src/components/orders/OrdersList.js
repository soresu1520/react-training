import { PageDiv, PageTitle, TitleDiv } from "../../styles/StyledComponents";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OrdersTable from "./OdersTable";
import { useState, useEffect } from "react";
import { getOrders } from "../../server/API";
import { Message } from "../../styles/StyledComponents";
import { sortDates } from "../../utils/sort";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetchOrders();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(sortDates(response.data));
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage("Error. Try again");
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
      {!message &&
        (orders.length ? (
          <OrdersTable orders={orders}></OrdersTable>
        ) : (
          <Message>There are no orders</Message>
        ))}
      {message && <Message>{message}</Message>}
    </PageDiv>
  );
};

export default OrdersList;
