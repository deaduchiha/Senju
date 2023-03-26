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
  console.log(route);

  return (
    <>
      <Navbar />
      <Container mt={10} maxW={route === "/docs" ? "full" : "container.lg"}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
