import React from "react";

const StoreContext = React.createContext({
  cart: [],
  user: {},

  addProduct: () => {},
  removeProduct: () => {},
});

export default StoreContext;
