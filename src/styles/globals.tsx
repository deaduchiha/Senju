import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Tilt Neon",
    body: "Tilt Neon",
  },
  styles: {
    global: {
      // styles for the `*`
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },

      // styles for the `body`
      body: {
        bg: "#FEFEFF",
        maxW: "100vw",
      },
      // styles for the `a`
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  colors: {
    senju: {
      50: "#F49700",
      500: "#FFA109",
      900: "#FFA81C",
    },
    docButton: {
      50: "#253450",
      500: "#2E4164",
      900: "#374D77",
    },
  },
});

export default theme;
