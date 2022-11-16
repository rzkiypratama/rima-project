import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";
import Account from "./pages/AccountPage";
import ForgotPassword from "./pages/ForgotPassword";
import Notification from "./pages/Notification";
import OrderTracking from "./pages/OrderTracking";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
   { path: "/", element: <Homepage /> },
   { path: "/account", element: <Account /> },
   { path: "/forgot", element: <ForgotPassword /> },
   { path: "/notification", element: <Notification /> },
   { path: "/order/tracking", element: <OrderTracking /> },
   { path: "/chat", element: <Chat /> },
]);

export default router;
