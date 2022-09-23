import { useEffect } from "react";

const OrderSummary = () => {
  useEffect(() => {
    document.title = "Order Summary";
  }, []);

  return (
    <div>
      <h1>Summary</h1>
    </div>
  );
};

export default OrderSummary;
