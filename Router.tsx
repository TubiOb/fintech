import { createBrowserRouter } from "react-router-dom";
import { AdminPage, HomePage } from "./src/modules";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage  />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },

 
]);

export default Router;