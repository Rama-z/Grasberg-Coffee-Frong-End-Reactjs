import React from "react";
import { useParams } from "react-router-dom";

function withRouteParams(Component) {
  // fungsi yang mereturnkan component
  function WithRouteParams(props) {
    // fungsi yang menampilkan fitur navigasi
    const params = useParams();
    return <Component params={params} {...props} />;
  }
  return WithRouteParams;
}

export default withRouteParams;
