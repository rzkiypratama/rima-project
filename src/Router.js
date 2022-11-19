import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import OrderTracking from "./pages/OrderTracking";
import OrderTrackingDetail from "./pages/OrderTrackingDetail";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Admin from "./pages/SellerProduct";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Otp from "./pages/Otp";
import OtpVerified from "./pages/OtpVerified";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/notification", element: <Notification /> },
  { path: "/chat", element: <Chat /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/admin", element: <Admin /> },
  { path: "/product", element: <Product /> },
  { path: "/order/tracking", element: <OrderTracking /> },
  { path: "/order/tracking/detail", element: <OrderTrackingDetail /> },
  { path: "/product/detail", element: <ProductDetail /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/forgot/otp", element: <Otp /> },
  { path: "/forgot/otp/verify", element: <OtpVerified /> },
]);

export default router;
