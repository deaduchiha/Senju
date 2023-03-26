// chakra ui
import { Box, Flex, Heading } from "@chakra-ui/react";
// components
import { tutorial } from "@/constant/docsTitle";
// react scroll
import { Link } from "react-scroll";

const DocsMenu = () => {
  return (
    <Box>
      <Heading as="h3" size="md">
        Anime
      </Heading>
      <Flex flexDirection="column" gap={5}>
        {tutorial.map((item, index) => (
          <Link to={item} smooth={true} duration={500} key={index}>
            {item}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default DocsMenu;
