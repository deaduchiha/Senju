import React from "react";
import Image from "next/image";
import { Box, Container, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW="container.lg">
      <Flex py={2} justifyContent="space-between" alignItems="center">
        <Image width={100} height={20} src="senju.svg" alt="" />
        <Box>salam</Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
