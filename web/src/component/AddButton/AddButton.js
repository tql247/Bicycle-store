import React from "react";
import styles from "./AddButton.module.css";

export default class Addbutton extends React.Component {
  addProduct() {
    alert("add product!");
  }

  render() {
    return (
      <div onClick={this.addProduct} className={styles.btn}>
        &#43;
      </div>
    );
  }
}
