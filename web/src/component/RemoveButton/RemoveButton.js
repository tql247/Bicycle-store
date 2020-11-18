import React from "react";
import styles from "./RemoveButton.module.css";

export default class Addbutton extends React.Component {
  removeProduct() {
    alert("remove product!");
  }

  render() {
    return (
      <div onClick={this.removeProduct} className={styles.btn}>
        &minus;
      </div>
    );
  }
}
