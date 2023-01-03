import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMidTrans } from "../utils/transaction";
import styles from "../styles/VaPayment.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

const VaPayment = (props) => {
  const token = useSelector((state) => state.auth.token);
  const [seen, setSeen] = useState(false);
  console.log(seen);
  const handleOk = async () => {
    handleMidTrans({ transaction_id: props.id }, token);
    window.open("https://simulator.sandbox.midtrans.com/permata/va/index");
  };
  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>{props.title}</p>
            </div>
            <div className={styles["modal-body"]}>
              Va Number:
              <input
                className={styles["input-body"]}
                type="text"
                value={props.body}
                disabled
              />
              <ContentCopyIcon
                sx={{ fontSize: "30px" }}
                className={styles["copy-body"]}
                onClick={async () => {
                  await navigator.clipboard.writeText(props.body);
                  setSeen(true);
                }}
              />
            </div>
            <div
              className={
                seen ? styles["clipboard-seen"] : styles["clipboard-unseen"]
              }
            >
              Va Number Copied!
            </div>
            <div className={styles["copy-modal"]}>Copy your Va Number</div>
            <div className={styles["modal-footer"]}>
              <button
                className={styles.button}
                onClick={() => {
                  props.setOpen(!props.open);
                  setSeen(false);
                }}
              >
                No
              </button>
              <button className={styles.button} onClick={handleOk}>
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VaPayment;
