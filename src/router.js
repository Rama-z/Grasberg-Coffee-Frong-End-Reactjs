import { createBrowserRouter } from "react-router-dom";

// import App from "./pages/App";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import History from "./pages/History";
import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import ForgotPWD from "./pages/ForgotPWD";
import App from "./App";
import TryLogin from "./pages/TryLogin";
import LoginError from "./pages/LoginError";
import PrivateElement from "./components/PrivateElement";
import Counter from "./pages/Counter";
// import Protected from "./utils/Protected";
// import Error from "./pages/Error";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/", element: <Home /> },
  { path: "/auth", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
  {
    path: "/history",
    element: (
      <PrivateElement allowedRoles={["admin", "user"]}>
        <History />
      </PrivateElement>
    ),
  },
  { path: "/payment", element: <Payment /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/forgotpwd", element: <ForgotPWD /> },
  { path: "/app", element: <App /> },
  { path: "/trylogin", element: <TryLogin /> },
  { path: "/loginerror", element: <LoginError /> },
  { path: "/counter", element: <Counter /> },
]);

export default router;
