import React from "react";
import "./product.css";
import QuanityPicker from "./quanityPicker";
import { useState } from "react";

const Product = (props) => {
  let [quanity, setQuanity] = useState(1);
  const quantityChange = (val) => {
    setQuanity(val);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <label>Price: ${props.data.price} Thousand</label>
      <label>Total: ${(props.data.price * quanity).toFixed(2)} Thousand </label>
      <QuanityPicker onChange={quantityChange}></QuanityPicker>
      <button className="btn btn-primary btn-sm">Add</button>
    </div>
  );
};

export default Product;
