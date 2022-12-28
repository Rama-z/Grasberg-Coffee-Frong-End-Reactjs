import React, { Fragment, useRef, useState, useEffect } from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/HeaderHome";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { editProfile } from "../utils/profile";
import sample from "../assets/profile.png";
// import authAction from "../redux/actions/auth";
import profileAction from "../redux/actions/profile";
import Modal from "../components/ModalLogout";

const Profile = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const refTarget = useRef(null);
  const profile = useSelector((state) => state.user);
  const [body, setBody] = useState({});
  const [notEdit, setNotEdit] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    dispatch(profileAction.getProfileThunk(token));
  }, [dispatch]);

  const onEdit = () => {
    setNotEdit(!notEdit);
  };

  const getBirthday = () => {
    const date = new Date(profile?.birthday);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "/" + mm + "/" + yyyy;
  };

  const changeHandler = (e) => [
    setBody({ ...body, [e.target.name]: e.target.value }),
  ];

  const imageHandler = (e) => {
    const photo = e.target.files[0];
    setBody({ ...body, image: photo });
    // setImgPreview(URL.createObjectURL(photo));
  };

  const handleChanges = async (body) => {
    const formData = new FormData();
    Object.keys(body).forEach((e) => {
      formData.append(e, body[e]);
    });
    try {
      // await editProfile(formData, token);
      onEdit();
    } catch (error) {
      console.log(error);
    }
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
                  src={profile.image || sample}
                  alt=""
                />
              </div>
              <p className={`${styles["username"]}`}>
                {profile.username || "username"}
              </p>
              <p className={`${styles["email"]}`}>{profile.email}</p>
              <p
                className={`${styles["btn"]} ${styles["choose"]} ${styles["krem"]}`}
                onClick={(e) => {
                  e.preventDefault();
                  refTarget.current.click();
                }}
              >
                Choose Photo
              </p>
              <input
                type="file"
                ref={refTarget}
                onChange={(e) => imageHandler(e)}
                style={{ display: "none" }}
              />
              <p
                className={`${styles["btn"]} ${styles["coklat"]} ${styles["remove"]}`}
              >
                Remove Photo
              </p>
              <p className={`${styles["edit"]} ${styles["btn"]}`}>
                Edit Password
              </p>
              <section
                className={`${styles["content2"]} ${styles["mid-in-profile"]} ${styles["flex-column"]} ${styles["mid-first"]}`}
              >
                <div
                  className={`${styles["format-text1"]} ${styles["flex-row"]}`}
                >
                  <div className={`${styles["font-format2"]}`}>Contacts</div>
                  <div>
                    <img src="./assets/pena.png" alt="" />
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
                        Email Adress :<p></p>
                        <input
                          type="text"
                          className={`${styles["input"]}`}
                          placeholder={profile.email}
                          disabled
                        />
                        <div className={`${styles["under-input"]}`}></div>
                      </div>
                      <div
                        className={`${styles["font-format"]} ${styles["margins"]}`}
                      >
                        Delivery Adress :<p></p>
                        <input
                          type="text"
                          className={`${styles["input"]}`}
                          placeholder={profile.address || "Input your address"}
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
                        placeholder={profile.phone || "Input your phone number"}
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
                        placeholder={profile.username || "Input your address"}
                        onChange={changeHandler}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      First Name :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder={profile.firstname || "Input your address"}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Last Name :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder={profile.lastname || "Input your address"}
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
                        disabled={notEdit}
                        onChange={changeHandler}
                        name="birthday"
                        type={notEdit ? "text" : "date"}
                        placeholder={getBirthday()}
                        className={`${styles["input"]}`}
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
                      {notEdit ? (
                        <input
                          disabled={true}
                          id="Male"
                          // defaultChecked={profile?.gender === "Male"}
                          checked={profile?.gender === "Male"}
                          type="radio"
                          placeholder="Male"
                          name="gender"
                          value="Male"
                        />
                      ) : (
                        <input
                          // defaultChecked={profile?.gender === "Male"}
                          type="radio"
                          id="Male"
                          name="gender"
                          value="Male"
                          onChange={changeHandler}
                          className="me-2"
                        />
                      )}
                      Male
                    </label>
                    <label htmlFor="Female">
                      <input
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
              <p
                className={`${styles["btn"]} ${styles["coklat"]} ${styles["save"]}`}
                onClick={() => {
                  handleChanges(body);
                }}
              >
                Save Change
              </p>
              <p
                className={`${styles["btn"]} ${styles["krem"]} ${styles["cancel"]}`}
                onClick={() => {
                  setBody({});
                  onEdit();
                }}
              >
                Cancel
              </p>
              <div className={`${styles["log"]}`} onClick={modalHandler}>
                Log out
              </div>
            </section>

            <section
              className={`${styles["content2"]} ${styles["mid-in-profile"]} ${styles["flex-column"]} ${styles["mid-second"]}`}
            >
              <div
                className={`${styles["format-text1"]} ${styles["flex-row"]}`}
              >
                <div className={`${styles["font-format2"]}`}>Contacts</div>
                <div>
                  <img src="./assets/pena.png" alt="" />
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
                      Email Adress :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder={profile?.email || "Input your name"}
                      />
                      <div className={`${styles["under-input"]}`}></div>
                    </div>
                    <div
                      className={`${styles["font-format"]} ${styles["margins"]}`}
                    >
                      Delivery Adress :<p></p>
                      <input
                        type="text"
                        className={`${styles["input"]}`}
                        placeholder={profile?.adress || "Input your address"}
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
                      placeholder={profile?.phone || "Input your phone number"}
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
                      placeholder={profile?.username || "Input your address"}
                      onChange={changeHandler}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    First Name :<p></p>
                    <input
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder={profile?.firstname || "Input your address"}
                    />
                    <div className={`${styles["under-input"]}`}></div>
                  </div>
                  <div
                    className={`${styles["font-format"]} ${styles["margins"]}`}
                  >
                    Last Name :<p></p>
                    <input
                      type="text"
                      className={`${styles["input"]}`}
                      placeholder={profile?.lastname || "Input your address"}
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
                      disabled={notEdit}
                      onChange={changeHandler}
                      name="birthday"
                      type={notEdit ? "text" : "date"}
                      placeholder={getBirthday()}
                      className={`${styles["input"]}`}
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
                    {notEdit ? (
                      <input
                        disabled={true}
                        id="Male"
                        // defaultChecked={profile?.gender === "Male"}
                        checked={profile?.gender === "Male"}
                        type="radio"
                        placeholder="Male"
                        name="gender"
                        value="Male"
                      />
                    ) : (
                      <input
                        // defaultChecked={profile?.gender === "Male"}
                        type="radio"
                        id="Male"
                        name="gender"
                        value="Male"
                        onChange={changeHandler}
                        className="me-2"
                      />
                    )}
                    Male
                  </label>
                  <label htmlFor="Female">
                    <input
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
          </section>
        </main>
      </section>
      <Modal open={modalOpen} setOpen={setModalOpen} />
      <Footer />
    </>
  );
};

export default Profile;
