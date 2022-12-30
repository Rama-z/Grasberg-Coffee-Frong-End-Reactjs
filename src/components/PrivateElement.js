import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PrivateElement({ allowedRoles, children }) {
  const auth = useSelector((state) => state.auth);
  if (!auth.token) {
    toast.info("You are not allowed to go to the page, please login first");
    return (
      <Navigate
        to="/"
        replace={true}
        state={{ msg: "Silakan login terlebih dahulu", isRedirected: true }}
      />
    );
  }
  // kondisi 2 = apakah sudah sesuai dengan role
  if (allowedRoles.length > 0)
    if (!allowedRoles.includes(auth.role)) {
      return (
        <Navigate
          to="/"
          replace={true}
          state={{ msg: "Forbidden", isRedirected: true }}
        />
      );
    }
  return children;
}
