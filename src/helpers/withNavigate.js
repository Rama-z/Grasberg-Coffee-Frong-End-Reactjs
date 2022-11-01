import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  // fungsi yang mereturnkan component
  function WithNavigate(props) {
    // fungsi yang menampilkan fitur navigasi
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  }
  return WithNavigate;
}

export default withNavigate;
