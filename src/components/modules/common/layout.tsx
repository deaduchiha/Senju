// react
import React, { ReactNode } from "react";
import { useRouter } from "next/router";
// chakra ui
import { Container } from "@chakra-ui/react";
// components
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { route } = router;

  return route === "/docs" ? (
    <>{children}</>
  ) : (
    <>
      <Navbar />
      <Container mt={10} maxW={"container.lg"}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
