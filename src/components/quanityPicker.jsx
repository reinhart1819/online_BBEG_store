import React from "react";
import { useState } from "react";
import "./quanityPicker.css";

const QuanityPicker = (props) => {
  let [quanity, setQuanity] = useState(1);

  const handleIncrease = () => {
    let newVal = quanity + 1;
    setQuanity(newVal);
    props.onChange(newVal);
  };
  const handleDecrease = () => {
    if (quanity > 1) {
      let val = quanity - 1;
      setQuanity(val);
      props.onChange(val);
    }
  };
  return (
    <div className="quanityPicker">
      <button className="btn btn-warning btn-sm" onClick={handleDecrease}>
        -
      </button>
      <label>{quanity}</label>
      <button className="btn btn-success btn-sm" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
export default QuanityPicker;
