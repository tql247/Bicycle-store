import React from "react";
import PropTypes from "prop-types";
import styles from "./ListProduct.module.css";
import AddButton from "../AddButton/AddButton";

export default class ListProduct extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    const elements = ["one", "two", "three"];
    return (
      <div className="component-display">
        <div className={styles.title}>List product</div>
        {elements.map((value, index) => {
          return (
            <div className={styles.rowData}>
              <div key={index}>{value}</div>
              <AddButton />
            </div>
          );
        })}
      </div>
    );
  }
}
