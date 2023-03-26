// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";

const DocsSideBar = () => {
  return (
    <Flex
      pos="fixed"
      top="0"
      left="0"
      w={{ base: "full", md: "xs" }}
      h="full"
      bg="gray.800"
      color="white"
      overflowX="hidden"
      overflowY="auto"
      borderColor="gray.700"
      borderRightWidth="1px"
      pt="6"
      pb="4"
      pl="4"
      pr="3"
      display={{ base: "none", md: "block" }}
    >
      <DocsMenu />
    </Flex>
  );
};

export default DocsSideBar;
