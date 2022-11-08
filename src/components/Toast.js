import React from "react";
import styles from "../styles/Toast.module.css";
function Toast({ display, status, message, changeState }) {
  return (
    <div
      onClick={() => {
        changeState(false);
      }}
      className={`${styles["container"]} ${styles[display]} ${styles[status]}`}
    >
      <p className={styles["message"]}>{message}</p>
    </div>
  );
}

export default Toast;
