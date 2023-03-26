import { Box, Flex, Heading } from "@chakra-ui/react";

import { Link } from "react-scroll";

const DocsMenu = () => {
  return (
    <Box>
      <Heading as="h3" size="md">
        Anime
      </Heading>
      <Flex flexDirection="column" gap={5}></Flex>
    </Box>
  );
};

export default DocsMenu;
