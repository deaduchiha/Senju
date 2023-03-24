// chakra ui
import { Button, Container, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  const nav = ["home", "docs", "github", "buy me a coffee"];

  return (
    <Container maxW="container.lg">
      <Flex py={4} justifyContent="space-between" alignItems="center">
        <Image
          width={100}
          src="senju.svg"
          alt=""
          display={{ base: "none", sm: "inline" }}
        />
        <Flex
          w={{ base: "full", sm: "inherit" }}
          gap={{ sm: 6, base: "inherit" }}
          justifyContent={{ sm: "inherit", base: "space-around" }}
        >
          {nav.map((item, index) => (
            <Button key={index} variant="link" color="black">
              {item}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
