// chakra ui
import { Box, Flex, Heading } from "@chakra-ui/react";
// components
import { tutorial } from "@/constant/docsTitle";
// react scroll
import { Link } from "react-scroll";

const DocsMenu = () => {
  return (
    <Box>
      <Heading as="h3" size="md" mb={3}>
        Anime
      </Heading>
      <Flex flexDirection="column" gap={3} pl={1}>
        {tutorial.map((item, index) =>
          item.type === "anime" ? (
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </Link>
          ) : (
            ""
          )
        )}
      </Flex>
      <Heading as="h3" size="md" mt={5} mb={3}>
        Characters
      </Heading>
      <Flex flexDirection="column" gap={3} pl={1}>
        {tutorial.map((item, index) =>
          item.type === "characters" ? (
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              key={index}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </Link>
          ) : (
            ""
          )
        )}
      </Flex>
    </Box>
  );
};

export default DocsMenu;
