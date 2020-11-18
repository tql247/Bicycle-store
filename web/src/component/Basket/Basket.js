import React from "react";
import styles from "./Basket.module.css";
import RemoveButton from "../RemoveButton/RemoveButton"

export default class Basket extends React.Component {
  render() {
    const elements = ["one", "two", "three"];
    return (
      <div>
        <div className={styles.title}>Basket</div>
        {elements.map((value, index) => {
          return (
            <div className={styles.rowData}>
              <div key={index}>{value}</div>
              <RemoveButton />
            </div>
          );
        })}
      </div>
    );
  }
}
