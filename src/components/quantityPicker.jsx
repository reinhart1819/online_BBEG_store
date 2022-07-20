import React from "react";
import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    let newVal = quantity + 1;
    setQuantity(newVal);
    props.onChange(newVal);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      let val = quantity - 1;
      setQuantity(val);
      props.onChange(val);
    }
  };
  return (
    <div className="quanityPicker">
      <button className="btn btn-warning btn-sm" onClick={handleDecrease}>
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-success btn-sm" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
export default QuantityPicker;
