import React from "react";
import Image from "next/image";
import { Button, Container, Flex } from "@chakra-ui/react";

const Navbar = () => {
  const nav = ["home", "docs", "github", "buy me a coffee"];
  return (
    <Container maxW="container.lg">
      <Flex py={2} justifyContent="space-between" alignItems="center">
        <Image width={100} height={20} src="senju.svg" alt="" />
        <Flex gap={5}>
          {nav.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
