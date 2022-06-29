import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar></Navbar>
      <h1>Welcome to The BBEG Shop</h1>
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
