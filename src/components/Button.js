import React from "react";
import withNavigate from "../helpers/withNavigate";
import styles from "../styles/Button.module.css";

function Button(props) {
  return (
    <div className={`${styles.btn} ${styles[props.variant]}`}>
      <h4 className={`${styles["btn-title"]} ${styles[props.font]}`}>
        {props.text}
      </h4>
    </div>
  );
}

export default withNavigate(Button);
