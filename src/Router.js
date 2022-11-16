import { createBrowserRouter } from "react-router-dom";

// Pages
import Homepage from "./pages/HomePage";

import App from "./App";

const router = createBrowserRouter([
   //  { path: "/app", element: <App /> },
   { path: "/", element: <Homepage /> },
]);

export default router;
