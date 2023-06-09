// react & next
import Link from "next/link";

// chakra ui
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  const nav = ["docs", "blog", "github", "buy me a coffee"];

  return (
    <Container maxW="container.lg">
      <Flex py={4} justifyContent="space-between" alignItems="center">
        <Box as={Link} href="/">
          <Image
            width={100}
            src="senju.svg"
            alt=""
            display={{ base: "none", sm: "inline" }}
          />
        </Box>
        <Flex
          w={{ base: "full", sm: "inherit" }}
          gap={{ sm: 6, base: "inherit" }}
          justifyContent={{ sm: "inherit", base: "space-around" }}
        >
          {nav.map((item, index) => (
            <Text key={index} as={Link} href={`/${item}`}>
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
