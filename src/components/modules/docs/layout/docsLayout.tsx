// react & next
import React, { ReactNode } from "react";
// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsNavbar from "./DocsNavbar";
import DocsSideBar from "./docsSideBar";

type LayoutProps = {
  children: ReactNode;
};

const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <Flex justifyContent="flex-start">
      <DocsSideBar />
      <DocsNavbar />
    </Flex>
  );
};

export default DocsLayout;
