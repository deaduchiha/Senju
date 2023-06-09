// react & next
import React, { createContext, useContext, useState, useEffect } from "react";
// chakra ui
import { Box, Flex, useBreakpoint } from "@chakra-ui/react";
// components
import DocsMenu from "../Sidebar/menu";
// icons
import { SlMenu } from "react-icons/sl";

interface AppContextType {
  isCollapse: boolean;
  handleClick: () => void;
}

const AppContext = createContext<AppContextType>({
  isCollapse: false,
  handleClick: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

const DocsSideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };

  const currentBreakpoint = useBreakpoint();

  useEffect(() => {
    if (currentBreakpoint === "sm") setIsCollapse(true);
  }, [currentBreakpoint]);

  return (
    <AppContext.Provider value={{ isCollapse, handleClick }}>
      <Flex
        w={!isCollapse ? "225px" : "85px"}
        bg={isCollapse ? "inherit" : "#fafafa"}
        pl={5}
        pt={10}
        pos={{ base: "fixed", md: "sticky" }}
        top={0}
        left={0}
        minH="100vh"
        zIndex={!isCollapse ? 1 : "inherit"}
        h={{ base: "0", md: "full" }}
        transition="0.5s all ease-out"
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
    </AppContext.Provider>
  );
};

export default DocsSideBar;
