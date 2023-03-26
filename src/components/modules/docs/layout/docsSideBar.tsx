// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";
import NavbarCollapse from "../Sidebar/sideBarCollpase";

const DocsSideBar = () => {
  return (
    <Flex
      w="18vw"
      bg="#fafafa"
      pl={5}
      pt={4}
      flexDirection="column"
      position="relative"
    >
      <DocsMenu />
      <NavbarCollapse />
    </Flex>
  );
};

export default DocsSideBar;
