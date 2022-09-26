import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import FoodList from "./foodlist/FoodList";
import OrdersList from "./orders/OrdersList";
import OrderSummary from "./summary/OrderSummary";
import Footer from "./other/Footer";
import ShoppingCart from "./cart/ShoppingCart";
import Navbar from "./other/Navbar";
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
  image.png
`;

const FooterDiv = styled.footer`
  margin-top: auto;
`;
