import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.400",
        color: "white",
        boxSizing: "border-box",
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
