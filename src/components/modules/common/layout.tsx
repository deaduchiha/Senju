import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
