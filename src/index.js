import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
// import Home from './pages/Home';
// import Footer from "./components/Footer"
// import Login from './pages/Login'

// import router
import { RouterProvider } from "react-router-dom";
import router from "./router";
import reduxStore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={reduxStore}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
