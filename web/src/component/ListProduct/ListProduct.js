import React from "react";
// import PropTypes from "prop-types";
import styles from "./ListProduct.module.css";
import AddButton from "../AddButton/AddButton";
import getListProduct from "../../service/getListProduct";

export default class ListProduct extends React.Component {
  state = {
    product: [],
    isLoad: false
  };

  async componentDidMount() {
    await getListProduct(this)
  }

  render() {
    return (
      <div>
        <div className={styles.title}>Product</div>
        {this.state.product.map((value, index) => {
          return (
            <div key={index} className={styles.rowData}>
              <div >{value[1]}</div>
              <AddButton />
            </div>
          );
        })}
      </div>
    );
  }
}
