import React from "react";
import styles from "./ListProduct.module.css";
import AddButton from "../AddButton/AddButton";
import { getListProduct } from "../../service/index";


export default class ListProduct extends React.Component {
  state = {
    product: [],
    isLoad: false,
  };

  async componentDidMount() {
    await getListProduct(this);
  }

  render() {
    return (
      <div>
        <div className={styles.title}>Product</div>
        {this.state.product.map((value, index) => {
          return (
            <div key={index} className={styles.rowData}>
              <div>{value[1]}</div>
              <AddButton id_user={1} id_product={value[0]} />
            </div>
          );
        })}
      </div>
    );
  }
}
