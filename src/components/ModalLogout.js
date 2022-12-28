import styles from "../styles/Modal.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const ModalLogout = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const auth = useSelector((state) => state.auth);
  const logoutHandler = () => {
    const success = () => {
      toast.success(`Success logout`);
      navigate("/");
    };
    dispatch(authAction.logoutThunk(token, success));
  };

  return (
    <>
      {open && (
        <div>
          <div className={styles.modal}>
            <div className={styles["modal-content"]}>
              <div className={styles.text}>
                Are you sure you want to logout?
              </div>
              <div className={styles.tombol}>
                <div onClick={logoutHandler}>
                  <button type="submit" className="btn btn-danger">
                    {auth.isLoading ? (
                      <div className={styles["lds-ring"]}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      <div>Confirm</div>
                    )}
                  </button>
                </div>
                <div onClick={() => setOpen(!open)}>
                  <button type="submit" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogout;
