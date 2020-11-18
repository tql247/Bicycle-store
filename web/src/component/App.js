import React from "react";
import ListProduct from "./ListProduct/ListProduct";
import Basket from "./Basket/Basket";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <ListProduct />
        <Basket />
      </div>
    );
  }
}
