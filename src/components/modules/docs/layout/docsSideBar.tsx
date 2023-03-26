// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";

const DocsSideBar = () => {
  return (
    <Flex minH="100vh" w="20vw" bg="#f5f5f5cc" pl={"10"} pt={10}>
      <DocsMenu />
    </Flex>
  );
};

export default DocsSideBar;
