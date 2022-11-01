import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Home from './pages/Home';
// import Footer from "./components/Footer"
// import Login from './pages/Login'

// import router
import { RouterProvider } from "react-router-dom";
import router from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

reportWebVitals();
