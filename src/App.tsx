// import { RouterProvider } from "react-router-dom";
// import { ChakraBaseProvider } from "@chakra-ui/react";
// import theme from "./theme/theme";
// import Router from '../Router';

// function App() {
//   return (
//     <>
//       <ChakraBaseProvider theme={theme}>
//         <RouterProvider router={Router}></RouterProvider>
//       </ChakraBaseProvider>
//     </>
//   );
// }

// export default App;








import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import AppRouter from '../Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ChakraProvider>
  );
}

export default App;
