import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#00082F",
    },
    white: {
      100: "#fff",
    },
    green: {
      100: "#80ffdb",
      200: "#72efdd",
      300: "#64DFDF"
    },
    blue: {
      100: "#0077B6",
    },
    gray: {
      100: "RGBA(0, 0, 0, 0.01)",
    }
  },
});

export default theme;