import React, { Fragment, useRef, useState, useEffect } from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { editProfile } from "../utils/profile";
import sample from "../assets/profile.png";
// import authAction from "../redux/actions/auth";
import userAction from "../redux/actions/profile";
import Modal from "../components/ModalLogout";
import { toast } from "react-toastify";
import { EditLocation } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const refTarget = useRef(null);
  const profile = useSelector((state) => state.user.profile);
  const [imagePreview, setImagePreview] = useState(profile.image);
  const [body, setBody] = useState({
    username: profile.username,
    firstname: profile.firstname,
    lastname: profile.lastname,
    birthday: profile.birthday,
    gender: profile.gender,
    address: profile.address,
    image: profile.image,
  });
  const [edit, setEdit] = useState(true);
  console.log(edit);
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(userAction.getProfileThunk(token));
  }, [dispatch]);

  const getBirthday = () => {
    const date = new Date(body.birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return yyyy + "-" + mm + "-" + dd;
  };

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    const defaultSize = 2 * 1024 * 1024;
    if (
      photo.type !== "image/jpeg" &&
      photo.type !== "image/jpg" &&
      photo.type !== "image/png"
    )
      return toast.error("Only receive .jpeg, .jpg, .png file");
    if (photo.size > defaultSize)
      return toast.error("File are too large, max size are 2 Mb");
    setBody({ ...body, image: e.target.files[0] });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = () => {
    const formData = new FormData();
    Object.keys(body).forEach((key, idx) => {
      formData.append(key, body[key]);
    });
    const success = () => {
      toast.success("Edit profile success!");
    };
    const failed = (msg) => {
      toast.error(`Edit profile failed, ${msg}`);
    };
    dispatch(userAction.editProfileThunk(formData, token, success, failed));
  };

  return (
    <>
      <Header />
      <section className={`${styles["background"]} pb-5`}>
        <main>
          <section
            className={`${styles["flex-column"]} ${styles["title"]} pt-5`}
          >
            User Profile
          </section>
          <section
            className={`${styles["flex-row1"]} ${styles["content"]} ${styles["center"]} ${styles["mid-profile"]}`}
          >
            <section
              className={`${styles["flex-column"]} ${styles["content"]} ${styles["profileImage"]} ${styles["mid-in-profile"]}`}
            >
              <div className={`${styles["flex-row"]}`}>
                <img
                  className={`${styles["circular"]}`}
                  src={imagePreview ? imagePreview : body.image}
                  alt=""
                />
              </div>
              <p className={`${styles["username"]}`}>
                {profile.username || "username"}
              </p>
              <p className={`${styles["email"]}`}>{profile.email}</p>
              <button
                disabled={edit}
                className={`${edit ? styles["btn2"] : styles["btn"]} ${
                  styles["choose"]
                } ${styles["krem"]}`}
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
              >
                Choose Photo
              </button>
              <input
                type="file"
                ref={refTarget}
                onChange={(e) => imageHandler(e)}
                style={{ display: "none" }}
              />
              <button
                disabled={edit}
                className={`${edit ? styles["btn2"] : styles["btn"]} ${
                  styles["coklat"]
                } ${styles["remove"]}`}
              >
                Remove Photo
              </button>
              <p
                className={`${styles["edit"]} ${styles["btn"]}`}
                onClick={() => {
                  navigate("/user/edit-password");
                }}
              >
                Edit Password
              </p>
              <section
                className={`${styles["content2"]} ${styles["mid-in-profile"]} ${styles["flex-column"]} ${styles["mid-first"]}`}
              >
                <div
                  className={`${styles["format-text1"]} ${styles["flex-row"]}`}
                >
                  <div className={`${styles["font-format2"]}`}>Contacts</div>
                  <div
                    className={styles.pen}
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    Edit
                    <CreateIcon />
                  </div>
                </div>
                <div
                  className={`${styles["media-footer"]} ${styles["flex-row"]}`}
                >
                  <div
                    className={`${styles["column-format"]} ${styles["flex-row"]} `}
                  >
                    <section>
                      <div
                        className={`${styles["font-format"]} ${styles["margins"]}`}
                      >
                        Email Address :<p></p>
                        <input
                          type="text"
                          className={`${styles["input"]}`}
                          value={profile.email}
                          disabled={true}
                          style={{ cursor: "not-allowed" }}
                        />
                        <div className={`${styles["under-input"]}`}></div>
                      </div>
                      <div
                        className={`${styles["font-format"]} ${styles["margins"]}`}
                      >
                        Delivery Address :<p></p>
                        <input
                          disabled={edit}
                          type="text"
                          className={`${styles["input"]}`}
                          placeholder="Input your delivery address"
                          value={body.address}
                          onChange={(e) => {
                            setBody({
                              ...body,
                              address: e.target.value,
                            });
                          }}
                        />
                        <div className={`${styles["under-input"]}`}></div>
                      </div>
                    </section>
                  </div>
                  <div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]} ${styles["mobile-number"]}`}
                    >
                      Mobile Number : <p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        style={{ cursor: "not-allowed" }}
                        value={profile.phone}
                        disabled
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles["flex-row"]} ${styles["font-format2"]} ${styles["details"]}`}
                >
                  Details
                </div>
                <div
                  className={`${styles["media-footer"]} ${styles["flex-row"]}`}
                >
                  <div
                    className={`${styles["flex-column"]} ${styles["column-format"]}`}
                  >
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Display Name :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input your Display Name"
                        value={body.username}
                        disabled={edit}
                        onChange={(e) => {
                          setBody({
                            ...body,
                            username: e.target.value,
                          });
                        }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      First Name :<p></p>
                      <input
                        disabled={edit}
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input your first name"
                        value={body.firstname}
                        onChange={(e) => {
                          setBody({
                            ...body,
                            firstname: e.target.value,
                          });
                        }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Last Name :<p></p>
                      <input
                        disabled={edit}
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input your last name"
                        value={body.lastname}
                        onChange={(e) => {
                          setBody({
                            ...body,
                            lastname: e.target.value,
                          });
                        }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      DD/MM/YY: <p></p>
                      <input
                        disabled={edit}
                        onChange={changeHandler}
                        name="birthday"
                        type={edit ? "date" : "text"}
                        placeholder={getBirthday()}
                        className={`${styles["input"]}`}
                        style={{ overflow: "hidden" }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles["flex-row"]} ${styles["radio"]} ${styles["center"]}`}
                  >
                    <label htmlFor="Male">
                      <input
                        disabled={edit}
                        id="Male"
                        defaultChecked={profile?.gender === "Male"}
                        checked={profile?.gender === "Male"}
                        type="radio"
                        placeholder="Male"
                        name="gender"
                        value="Male"
                      />
                      Male
                    </label>
                    <label htmlFor="Female">
                      <input
                        disabled={edit}
                        type="radio"
                        id="Female"
                        name="gender"
                        value="Female"
                        onChange={changeHandler}
                        className="me-2"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </section>
              <p className={`${styles["do"]}`}>
                Do you want to save the change?
              </p>
              <button
                disabled={edit}
                className={`${edit ? styles["btn2"] : styles["btn"]} ${
                  styles["coklat"]
                } ${styles["save"]}`}
                onClick={() => {
                  // handleChanges(body);
                  submitHandler();
                }}
              >
                {profile.isLoading ? (
                  <div className={styles["lds-ring"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <div>Save Change</div>
                )}
              </button>
              <button
                disabled={edit}
                className={`${edit ? styles["btn2"] : styles["btn"]} ${
                  styles["krem"]
                } ${styles["cancel"]}`}
                onClick={() => {
                  setBody({
                    username: profile.username,
                    firstname: profile.firstname,
                    lastname: profile.lastname,
                    birthday: profile.birthday,
                    gender: profile.gender,
                    address: profile.address,
                    image: profile.image,
                  });
                  setEdit(true);
                }}
              >
                Cancel
              </button>
              <button className={`${styles["log"]}`} onClick={modalHandler}>
                Log out
              </button>
            </section>

            <section
              className={`${styles["content2"]} ${styles["mid-in-profile"]} ${styles["flex-column"]} ${styles["mid-second"]}`}
            >
              <div
                className={`${styles["format-text1"]} ${styles["flex-row"]}`}
              >
                <div className={`${styles["font-format2"]}`}>Contacts</div>
                <div
                  className={styles.pen}
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  Edit
                  <CreateIcon />
                </div>
              </div>
              <div
                className={`${styles["media-footer"]} ${styles["flex-row"]}`}
              >
                <div
                  className={`${styles["column-format"]} ${styles["flex-row"]} `}
                >
                  <section>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Email Address :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        value={profile.email}
                        disabled
                        style={{ cursor: "not-allowed" }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Delivery Address :<p></p>
                      <input
                        disabled={edit}
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder="Input your delivery address"
                        value={body.address}
                        onChange={(e) => {
                          setBody({
                            ...body,
                            address: e.target.value,
                          });
                        }}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                  </section>
                </div>
                <div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]} ${styles["mobile-number"]}`}
                  >
                    Mobile Number : <p></p>
                    <input
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder="Input your phone number"
                      style={{ cursor: "not-allowed" }}
                      value={profile.phone}
                      disabled
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles["flex-row"]} ${styles["font-format2"]} ${styles["details"]}`}
              >
                Details
              </div>
              <div
                className={`${styles["media-footer"]} ${styles["flex-row"]}`}
              >
                <div
                  className={`${styles["flex-column"]} ${styles["column-format"]}`}
                >
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    Display Name :<p></p>
                    <input
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder="Input your Display Name"
                      value={body.username}
                      disabled={edit}
                      onChange={(e) => {
                        setBody({
                          ...body,
                          username: e.target.value,
                        });
                      }}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    First Name :<p></p>
                    <input
                      disabled={edit}
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder="Input your first name"
                      value={body.firstname}
                      onChange={(e) => {
                        setBody({
                          ...body,
                          firstname: e.target.value,
                        });
                      }}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    Last Name :<p></p>
                    <input
                      disabled={edit}
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder="Input your last name"
                      value={body.lastname}
                      onChange={(e) => {
                        setBody({
                          ...body,
                          lastname: e.target.value,
                        });
                      }}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    DD/MM/YY: <p></p>
                    <input
                      disabled={edit}
                      onChange={changeHandler}
                      name="birthday"
                      type={"date"}
                      placeholder="Input your birthday"
                      value={getBirthday()}
                      className={`${styles["input"]}`}
                      style={{ overflow: "hidden" }}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${styles["flex-row"]} ${styles["radio"]} ${styles["center"]}`}
                >
                  <label htmlFor="Male">
                    <input
                      disabled={edit}
                      defaultChecked={body.gender === "male"}
                      type="radio"
                      id="Male"
                      name="gender"
                      value="male"
                      onChange={(e) => {
                        setBody({
                          ...body,
                          gender: e.target.value,
                        });
                      }}
                      className="me-2"
                    />
                    Male
                  </label>
                  <label htmlFor="Female">
                    <input
                      disabled={edit}
                      defaultChecked={body.gender === "female"}
                      type="radio"
                      id="Female"
                      name="gender"
                      value="female"
                      onChange={(e) => {
                        setBody({
                          ...body,
                          gender: e.target.value,
                        });
                      }}
                      className="me-2"
                    />
                    Female
                  </label>
                </div>
              </div>
            </section>
          </section>
        </main>
      </section>
      <Modal open={modalOpen} setOpen={setModalOpen} />
      <Footer />
    </>
  );
};

export default Profile;
