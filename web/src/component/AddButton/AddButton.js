import React from "react";
import styles from "./AddButton.module.css"

export default class Addbutton extends React.Component {
  render() {
    return (
      <div className={styles.btn}>
          &#43;
      </div>
    );
  }
}
