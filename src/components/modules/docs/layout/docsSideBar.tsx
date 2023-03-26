// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";

const DocsSideBar = () => {
  return (
    <Flex w="30vh" bg="#fafafa" pl={5} pt={4}>
      <DocsMenu />
    </Flex>
  );
};

export default DocsSideBar;
