import React from "react";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
  // fungsi yang mereturnkan component
  function WithLocation(props) {
    // fungsi yang menampilkan fitur navigasi
    const location = useLocation();
    return <Component location={location} {...props} />;
  }
  return WithLocation;
}

export default withLocation;
