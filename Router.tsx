// import { createBrowserRouter } from "react-router-dom";
// import { AdminPage, HomePage } from "./src/modules";


// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage  />,
//   },
//   {
//     path: "/admin",
//     element: <AdminPage />,
//   },

 
// ]);

// export default Router;
















import { Routes, Route } from "react-router-dom";
import { AdminPage, HomePage } from "./src/modules";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRouter;
