import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#FEFEFF",
        color: "white",
        boxSizing: "border-box",
        maxW: "100vw",
        fontFamily: "Tilt Neon",
      },
      // styles for the `a`
      a: {
        color: "inherit",
        textDecoration: "underline",
      },
    },
  },
});

export default theme;
