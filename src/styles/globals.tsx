import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // for custom breakPoints
  breakpoints: {
    sidebar: "30em",
  },
  // fonts
  fonts: {
    heading: "Tilt Neon",
    body: "Tilt Neon",
  },
  // styles
  styles: {
    global: {
      // styles for the `*`
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        transition: "0.4s all ease-out",
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
      100: "#fdeacc",
      200: "#fbd599",
      300: "#f8c166",
      400: "#f6ac33",
      500: "#f49700",
      600: "#c37900",
      700: "#925b00",
      800: "#623c00",
      900: "#311e00",
    },
    docButton: {
      100: "#fde5cc",
      200: "#fccc99",
      300: "#fab266",
      400: "#f99933",
      500: "#f77f00",
      600: "#c66600",
      700: "#944c00",
      800: "#633300",
      900: "#311900",
    },
  },
});

export default theme;
