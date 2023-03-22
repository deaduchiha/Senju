import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container mt={10} maxW="container.lg">
        {children}
      </Container>
    </>
  );
};

export default Layout;
