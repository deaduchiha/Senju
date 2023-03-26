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
        transition: "0.6s",
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
      100: "#e4e4e4",
      200: "#cacaca",
      300: "#afafaf",
      400: "#959595",
      500: "#7a7a7a",
      600: "#626262",
      700: "#494949",
      800: "#313131",
      900: "#181818",
    },
  },
});

export default theme;
