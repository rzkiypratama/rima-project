import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";
import Account from "./pages/AccountPage";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import OrderTracking from "./pages/OrderTracking";
import OrderTrackingDetail from "./pages/OrderTrackingDetail";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/account", element: <Account /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/notification", element: <Notification /> },
  { path: "/chat", element: <Chat /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
  { path: "/order/tracking", element: <OrderTracking /> },
  { path: "/order/tracking/detail", element: <OrderTrackingDetail /> },
  { path: "/product/detail", element: <ProductDetail /> },
  { path: "/about", element: <About /> },
]);

export default router;
