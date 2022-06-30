import React from "react";
import "./product.css";
import QuanityPicker from "./quanityPicker";
import { useState } from "react";

const Product = (props) => {
  let [quanity, setQuanity] = useState(1);
  const quantityChange = (val) => {
    setQuanity(val);
  };

  const getTotal = () => {
    let total = props.data.price * quanity;
    return total.toFixed(2);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <label>Price: {props.data.price.toFixed(2)} Thousand gp</label>
      <label>Total: {getTotal()} Thousand gp</label>
      <QuanityPicker onChange={quantityChange}></QuanityPicker>
      <button className="btn btn-primary btn-sm">Add</button>
    </div>
  );
};

export default Product;
