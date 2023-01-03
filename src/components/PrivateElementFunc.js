// import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// props.children => mengakses komponen child
function PrivateElement({ children, allowedRoles = ["user", "admin"] }) {
  // conditional, jika true semua maka returnkan komponen child
  // jika false, maka redirect
  const navigate = useNavigate();
  // kondisi 1 = apakah sudah login
  const userInfo = useSelector((state) => state.auth);
  if (!userInfo.token)
    return navigate("/", {
      replace: true,
      state: {
        msg: "Silakan login terlebih dahulu",
        isRedirected: true,
      },
    });
  // kondisi 2 = apakah sudah sesuai dengan role
  if (allowedRoles.length > 0)
    if (!allowedRoles.includes(userInfo.role))
      return navigate("/", {
        replace: true,
        state: {
          msg: "Forbidden",
          isRedirected: true,
        },
      });
  return children;
}

export default PrivateElement;
