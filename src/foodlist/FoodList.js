import { useEffect } from "react";
import "../App.css";

const FoodList = () => {
  useEffect(() => {
    document.title = "Click and Eat";
  }, []);

  return (
    <div>
      <h1>Food List</h1>
    </div>
  );
};

export default FoodList;
