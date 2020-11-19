import React from "react";
import styles from "./Basket.module.css";
import RemoveButton from "../RemoveButton/RemoveButton";
import { getListBasket } from "../../service/index";

export default class Basket extends React.Component {
  state = {
    basket: [],
    isLoad: false,
  };

  async componentDidMount() {
    await getListBasket(this);
  }

  render() {
    return (
      <div>
        <div className={styles.title}>Basket</div>
        {this.state.basket.map((value, index) => {
          return (
            <div key={index} className={styles.rowData}>
              <div>{value[1]}</div>
              <RemoveButton id_user={1} id_product={value[0]} />
            </div>
          );
        })}
      </div>
    );
  }
}
