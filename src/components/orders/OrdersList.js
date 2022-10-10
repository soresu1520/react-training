import { PageDiv, PageTitle, TitleDiv } from "../../styles/StyledComponents";
import ListAltIcon from "@mui/icons-material/ListAlt";
import OrdersTable from "./OdersTable";
import { useState, useEffect } from "react";
import { getOrders } from "../../server/API";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(sortDates(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const sortDates = data => {
    const sorted = data.sort((a, b) => {
      const newA = a.date.split("/").reverse().join("-");
      const newB = b.date.split("/").reverse().join("-");
      return +new Date(newB) - +new Date(newA);
    });
    console.log(sorted);
    return sorted;
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
