// chakra ui
import { Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";

const DocsSideBar = () => {
  return (
    <Flex w="30vw" bg="#fafafa" pl={5} pt={4} flexDirection="column">
      <DocsMenu />
    </Flex>
  );
};

export default DocsSideBar;
