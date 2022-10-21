import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import FoodList from "./components/foodList/FoodList";
import OrdersList from "./components/orders/OrdersList";
import OrderSummary from "./components/summary/OrderSummary";
import Footer from "./components/other/Footer";
import ShoppingCart from "./components/cart/ShoppingCart";
import Navbar from "./components/other/Navbar";
import SnackbarContext from "./context/SnackbarContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";

function App() {
  const snackInfo = useState({ open: false, message: "", type: "" });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarContext.Provider value={snackInfo}>
        <AppDiv>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<FoodList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/summary" element={<OrderSummary />} />
              <Route path="/orders" element={<OrdersList />} />
            </Routes>
          </BrowserRouter>

          <FooterDiv>
            <Footer />
          </FooterDiv>
        </AppDiv>
      </SnackbarContext.Provider>
    </ThemeProvider>
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
