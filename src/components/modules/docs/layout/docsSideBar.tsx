// chakra ui
import { Box, Flex } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";
// icons
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const DocsSideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      <Flex
        w={!isCollapse ? "225px" : "85px"}
        bg="#fafafa"
        pl={5}
        pt={10}
        pos="sticky"
        top={0}
        left={0}
        minH="100vh"
        h="full"
        display={{ base: "none", md: "flex" }}
      >
        {!isCollapse ? <DocsMenu /> : ""}
        <Box
          position="absolute"
          top={5}
          right={!isCollapse ? "5" : "7"}
          zIndex={2}
        >
          <SlMenu onClick={handleClick} size={"20px"} cursor="pointer" />
        </Box>
      </Flex>
    </>
  );
};

export default DocsSideBar;
