// react & next
import React, { ReactNode } from "react";
// chakra ui
import { Box, Container, Flex } from "@chakra-ui/react";
// components
import DocsNavbar from "./docsNav";
import DocsSideBar from "./docsSideBar";

type LayoutProps = {
  children: ReactNode;
};

const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <Flex justifyContent="flex-start">
      <DocsSideBar />
      <Box w="full" flex={1}>
        <Container maxW="container.md">
          <DocsNavbar />
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DocsLayout;
