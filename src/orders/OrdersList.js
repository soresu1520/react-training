import { useEffect } from "react";

const OrdersList = () => {
  useEffect(() => {
    document.title = "Orders";
  }, []);

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default OrdersList;
