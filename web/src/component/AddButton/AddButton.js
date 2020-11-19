import React from "react";
import PropTypes from "prop-types";
import styles from "./AddButton.module.css";
import { addProduct } from "../../service/index";

export default class Addbutton extends React.Component {
  static propTypes = {
    id_user: PropTypes.number,
    id_product: PropTypes.number,
  };

  addProduct(self) {
    addProduct(self.props.id_user, self.props.id_product)
  };

  render() {
    return (
      <div onClick={() => this.addProduct(this)} className={styles.btn}>
        &#43;
      </div>
    );
  }
}
