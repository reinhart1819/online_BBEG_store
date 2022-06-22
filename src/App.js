import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar></Navbar>
        <h1>Welcome to the Monster Shop</h1>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
