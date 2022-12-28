import React from "react";
import styles from "../styles/NavLogin.module.css";
import { useNavigate } from "react-router-dom";
import searching from "../assets/Home/search.png";
import { useState } from "react";
import { useEffect } from "react";
// import { getProfile } from "../utils/profile";
import sample from "../assets/profile.png";
import { connect } from "react-redux";
import { createSearchParams } from "react-router-dom";

const NavLogin = ({ setSearchParams }) => {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  const [profile, setProfile] = useState({});

  function searchBar() {
    setState((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
    setProfile({ ...profile });
  }

  // const getDataProfile = async () => {
  //   try {
  //     const result = await getProfile();
  //     setProfile(result.data.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //     if (error === 403) {
  //       navigate("/login");
  //     }
  //   }
  // };

  const onSearchHandler = (e) => {
    console.log("search handler");
    this.setState((prevState) => ({
      searchParams: {
        ...prevState.searchParams,
        search: e.target.value,
      },
    }));
    const url = createSearchParams({
      search: e.target.value,
      filter: "",
      order_by: "transactions",
      order_in: "",
      page: "1",
      limit: "4",
    });
    setSearchParams(url);
  };

  useEffect(() => {
    // getDataProfile();
  }, []);

  return (
    <>
      <section className={`${styles["searching"]} ${text}`}>
        <form className={styles.searching} onSubmit={onSearchHandler}>
          <input className={title} type="text" placeholder="search here ..." />
          <div className={styles["search-img"]} onClick={searchBar}>
            <img src={searching} alt="searching" />
          </div>
        </form>
        <div
          className={styles.profile}
          onClick={() => {
            navigate("/profile");
          }}
        >
          {!profile.image ? (
            <img src={sample} alt="profile" />
          ) : (
            <img src={`http://localhost:8080/${profile.image}`} alt="profile" />
          )}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
    product: reduxState.product,
    promo: reduxState.promo,
  };
};

const NewComponent = connect(mapStateToProps)(NavLogin);

export default NewComponent;
