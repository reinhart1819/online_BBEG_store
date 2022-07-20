import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";

function App() {
  return (
    <div className="App container-fluid">
      <GlobalState>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
