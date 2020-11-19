import React from "react";
import styles from "./RemoveButton.module.css";
import PropTypes from "prop-types";
import { removeProduct } from "../../service/index"


export default class Addbutton extends React.Component {
  static propTypes = {
    id_user: PropTypes.number,
    id_product: PropTypes.number,
  };

  removeProduct(self) {
    removeProduct(self.props.id_user, self.props.id_product)
  };

  render() {
    return (
      <div onClick={() => this.removeProduct(this)} className={styles.btn}>
        &minus;
      </div>
    );
  }
}
