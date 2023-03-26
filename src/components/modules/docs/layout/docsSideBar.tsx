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
      bg="#fafafa"
      color="#111"
      overflowX="hidden"
      overflowY="auto"
      pt="6"
      pb="4"
      pl="4"
      pr="3"
      display={{ base: "none", md: "flex" }}
    >
      <DocsMenu />
    </Flex>
  );
};

export default DocsSideBar;
