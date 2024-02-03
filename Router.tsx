import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./src/modules";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage  />,
  },
 
]);

export default Router;