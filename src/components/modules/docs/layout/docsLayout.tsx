// react & next
import React, { ReactNode } from "react";
// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsNavbar from "./DocsNavbar";
import DocsSideBar from "./docsSideBar";

const DocsLayout = () => {
  return (
    <Flex justifyContent="flex-start">
      <DocsSideBar />
      <DocsNavbar />
    </Flex>
  );
};

export default DocsLayout;
