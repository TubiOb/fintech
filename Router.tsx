import { createBrowserRouter } from "react-router-dom";
import { AdminPage, HomePage, Landingpage } from "./src/modules";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage  />,
  },
  {
    path: "/waitlist",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },

 
]);

export default Router;