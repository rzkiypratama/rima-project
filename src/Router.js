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

const router = createBrowserRouter([
   { path: "/", element: <Homepage /> },
   { path: "/account", element: <Account /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/notification", element: <Notification /> },
   { path: "/order/tracking", element: <OrderTracking /> },
   { path: "/order/tracking/detail", element: <OrderTrackingDetail /> },
   { path: "/chat", element: <Chat /> },
=======
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/account", element: <Account /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/notification", element: <Notification /> },
  { path: "/chat", element: <Chat /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <Profile /> },
>>>>>>> 836d33c35e10201c4a9d2e26961649aa3edcedd5
]);

export default router;
