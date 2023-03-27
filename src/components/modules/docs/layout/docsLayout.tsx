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
      <Box w="full">
        <Container maxW={{ base: "sm", md: "container.lg" }}>
          <DocsNavbar />
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DocsLayout;
