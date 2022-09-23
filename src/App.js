import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import FoodList from "./foodlist/FoodList";
import OrdersList from "./orders/OrdersList";
import OrderSummary from "./summary/OrderSummary";
import Footer from "./other/Footer";
import ShoppingCart from "./cart/ShoppingCart";
import Navbar from "./other/Navbar";

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/orders" element={<OrdersList />} />
        </Routes>
      </BrowserRouter>

      <FooterDiv>
        <Footer></Footer>
      </FooterDiv>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  image.png
`;

const FooterDiv = styled.footer`
  margin-top: auto;
`;
