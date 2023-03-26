import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const DocsMenu = () => {
  return (
    <Box>
      <Heading as="h3" size="md">
        <Text as={Link} href="#"></Text>
      </Heading>
    </Box>
  );
};

export default DocsMenu;
