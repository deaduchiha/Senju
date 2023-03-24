// react & next
import type { AppProps } from "next/app";
// chakra ui
import { ChakraProvider } from "@chakra-ui/react";
// components
import Layout from "@/components/modules/common/layout";
import theme from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
