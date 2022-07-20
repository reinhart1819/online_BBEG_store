import React from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../context/storeContext";

const Product = (props) => {
  let [quantity, setQuantity] = useState(1);
  let globalAddProd = useContext(StoreContext).addProduct;

  const quantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  const handleAdd = () => {
    let prod4Cart = { ...props.data, quantity };

    globalAddProd(prod4Cart);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <label>Price: {props.data.price.toFixed(2)} Thousand gp</label>
      <label>Total: {getTotal()} Thousand gp</label>
      <QuantityPicker onChange={quantityChange}></QuantityPicker>
      <button onClick={handleAdd} className="btn btn-primary btn-sm">
        Add
      </button>
    </div>
  );
};

export default Product;
