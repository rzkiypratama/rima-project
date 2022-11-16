import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";
import Account from "./pages/AccountPage";

const router = createBrowserRouter([
   { path: "/", element: <Homepage /> },
   { path: "/account", element: <Account /> },
]);

export default router;
