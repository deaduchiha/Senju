import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Tilt Neon !important",
      },
      body: {
        bg: "#FEFEFF",
        maxW: "100vw",
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
