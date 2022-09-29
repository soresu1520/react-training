import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import FoodList from "./components/foodlist/FoodList";
import OrdersList from "./components/orders/OrdersList";
import OrderSummary from "./components/summary/OrderSummary";
import Footer from "./components/other/Footer";
import ShoppingCart from "./components/cart/ShoppingCart";
import Navbar from "./components/other/Navbar";
import SnackbarContext from "./context/SnackbarContext";

function App() {
  const snackInfo = useState({ open: false, message: "", type: "" });

  return (
    <SnackbarContext.Provider value={snackInfo}>
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
    </SnackbarContext.Provider>
  );
}

export default App;

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FooterDiv = styled.footer`
  margin-top: auto;
`;
