import "./productInCart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {
  const removeProduct = useContext(StoreContext).removeProduct;

  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemove = () => {
    removeProduct(props.data.id);
  };

  return (
    <div className="product-in-cart">
      <img src={"/img/" + props.data.image} alt="" />
      <div className="info">
        <h5>{props.data.title}</h5>
        <p>{props.data.category}</p>
      </div>

      <div className="price">
        <label>${props.data.price}</label>
      </div>
      <div className="quantity">
        <label>Amount:{props.data.quantity}</label>
      </div>
      <div className="total">
        <label>${getTotal()}</label>
      </div>

      <button onClick={handleRemove} className="btn btn-sm btn-danger">
        Remove from cart
      </button>
    </div>
  );
};

export default ProductInCart;
