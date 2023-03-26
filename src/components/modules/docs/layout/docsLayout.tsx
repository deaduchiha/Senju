// react & next
import React, { ReactNode } from "react";
// chakra ui
import { Box, Flex } from "@chakra-ui/react";
import DocsNavbar from "../navbar";

type LayoutProps = {
  children: ReactNode;
};

const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <Flex justifyContent="flex-start">
      {/* bg="#f5f5f5" */}
      <Box
        minH="100vh"
        w="20vw"
        bg={{ base: "green", md: "black", lg: "red" }}
        display={{ base: "none", md: "block" }}
      ></Box>
      <Box w="full">
        <DocsNavbar />
      </Box>
    </Flex>
  );
};

export default DocsLayout;
