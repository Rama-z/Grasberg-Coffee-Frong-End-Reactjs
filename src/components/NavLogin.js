import React from "react";
import styles from "../styles/NavLogin.module.css";
import { useNavigate } from "react-router-dom";
import searching from "../assets/Home/search.png";
import { useState } from "react";
import { useEffect } from "react";
import { getProfile } from "../utils/profile";
import sample from "../assets/profile.png";

export default function NavLogin() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const text = state.text;
  const title = state.title;
  const [profile, setProfile] = useState({});
  const [search, setSearch] = useState(() => "");

  function searchBar() {
    setState((state) => ({
      title: state.title === `${styles.show}` ? "" : `${styles.show}`,
    }));
  }

  const setValue = (event) => {
    console.log(event);
    setSearch(event.target.value);
  };
  const getSearch = () => {
    return navigate(`/product?search=${search}`);
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      // console.log(result.data.data[0]);
      setProfile(result.data.data[0]);
    } catch (error) {
      console.log(error);
      if (error === 403) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <>
      <section className={`${styles["searching"]} ${text}`}>
        <form className={styles.searching} onSubmit={getSearch}>
          <input
            className={title}
            type="text"
            placeholder="search here ..."
            onChange={setValue}
          />
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
}
