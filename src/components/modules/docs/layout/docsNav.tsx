// react & next
import Link from "next/link";
// chakra ui
import { Flex, Text } from "@chakra-ui/react";

const DocsNavbar = () => {
  const nav = ["docs", "blog", "github", "buy me a coffee"];

  return (
    <Flex justifyContent="space-between" py={5}>
      <Text as={Link} href="/">
        home
      </Text>
      {nav.map((item, index) => (
        <Text key={index} as={Link} href={`/${item}`}>
          {item}
        </Text>
      ))}
    </Flex>
  );
};

export default DocsNavbar;
