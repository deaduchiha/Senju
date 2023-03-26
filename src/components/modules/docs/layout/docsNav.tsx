// react & next
import Link from "next/link";
// chakra ui
import { Box, Flex, Text } from "@chakra-ui/react";

const DocsNavbar = () => {
  const nav = ["home", "docs", "blog", "github", "buy me a coffee"];

  return (
    <Flex justifyContent="space-around" py={5}>
      {nav.map((item, index) => (
        <Text key={index} as={Link} href={`/${item}`}>
          {item}
        </Text>
      ))}
    </Flex>
  );
};

export default DocsNavbar;
