import React from "react";
import { Navigate } from "react-router-dom";

export default class PrivateElement extends React.Component {
  render() {
    const { allowedRoles, children } = this.props;
    const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
    if (!userInfo.token)
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ msg: "Silakan login terlebih dahulu", isRedirected: true }}
        />
      );
    // kondisi 2 = apakah sudah sesuai dengan role
    if (allowedRoles.length > 0)
      if (!allowedRoles.includes(userInfo.role))
        return (
          <Navigate
            to="/"
            replace={true}
            state={{ msg: "Forbidden", isRedirected: true }}
          />
        );
    return children;
  }
}
