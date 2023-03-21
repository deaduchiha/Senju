import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
