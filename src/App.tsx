import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Router from '../Router';

function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={Router}></RouterProvider>
      </ChakraBaseProvider>
    </>
  );
}

export default App;