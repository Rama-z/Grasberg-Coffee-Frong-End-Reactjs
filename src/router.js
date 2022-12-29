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
import Confirm from "./pages/Confirm";
import App from "./App";
// import TryLogin from "./pages/TryLogin";
import LoginError from "./pages/LoginError";
import PrivateElement from "./components/PrivateElement";
// import Counter from "./pages/Counter";
import EditProduct from "./pages/EditProduct";
// import EditProduct2 from "./pages/EditProduct2";
import EditPromo from "./pages/EditPromo";
import AddPromo from "./pages/AddPromo";
import AddProduct from "./pages/AddProduct";
// import DetailsProduct from "./pages/DetailsProduct";
// import TryProduct from "./pages/TryProduct";
// import Protected from "./utils/Protected";
// import Error from "./pages/Error";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Signup path="/auth/register" /> },
  { path: "/profile", element: <Profile /> },
  { path: "/products", element: <Product /> },
  {
    path: "/history",
    element: (
      <PrivateElement allowedRoles={["admin", "user"]}>
        <History />
      </PrivateElement>
    ),
  },
  {
    path: "/payment",
    element: (
      <PrivateElement allowedRoles={["admin", "user"]}>
        <Payment />
      </PrivateElement>
    ),
  },
  { path: "/product/:id", element: <ProductDetails /> },
  // { path: "/products/:id", element: <DetailsProduct /> },
  { path: "/auth/forgot", element: <ForgotPWD /> },
  { path: "/auth/confirm/:otp", element: <Confirm /> },
  { path: "/app", element: <App /> },
  // { path: "/tryprofile", element: <Coba2 /> },
  { path: "/loginerror", element: <LoginError /> },
  // { path: "/counter", element: <Counter /> },
  { path: "/editProduct", element: <EditProduct /> },
  // { path: "/editProduct2/:id", element: <EditProduct2 /> },
  { path: "/editPromo", element: <EditPromo /> },
  { path: "/addPromo", element: <AddPromo /> },
  { path: "/addProduct", element: <AddProduct /> },
]);

export default router;
