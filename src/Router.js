import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";
import Account from "./pages/AccountPage";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import OrderTracking from "./pages/OrderTracking";
import OrderTrackingDetail from "./pages/OrderTrackingDetail";
import Chat from "./pages/Chat";
<<<<<<< HEAD
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/account", element: <Account /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/notification", element: <Notification /> },
  { path: "/chat", element: <Chat /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <Product /> },
=======

const router = createBrowserRouter([
   { path: "/", element: <Homepage /> },
   { path: "/account", element: <Account /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/notification", element: <Notification /> },
   { path: "/order/tracking", element: <OrderTracking /> },
   { path: "/order/tracking/detail", element: <OrderTrackingDetail /> },
   { path: "/chat", element: <Chat /> },
>>>>>>> origin/order-tracking
]);

export default router;
