// react & next
import React from "react";
// chakra ui
import { Box, Flex } from "@chakra-ui/react";
// components
import DocsNavbar from "./docsNav";
import DocsSideBar from "./docsSideBar";

const DocsLayout = () => {
  return (
    <Flex justifyContent="flex-start">
      <DocsSideBar />
      <Box w="full">
        <DocsNavbar />
      </Box>
    </Flex>
  );
};

export default DocsLayout;
