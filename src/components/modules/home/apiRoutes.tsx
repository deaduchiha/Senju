// react & next
import Link from "next/link";
// chakra ui
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ApiRoutes = () => {
  type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  type RoutePath = string;
  type Route = {
    method: HttpMethod;
    path: RoutePath;
  };
  const routes: Route[] = [
    { method: "GET", path: "/anime" },
    { method: "GET", path: "/anime/naruto" },
    { method: "GET", path: "/characters" },
    { method: "GET", path: "/characters/1" },
    { method: "GET", path: "/characters?limit=10" },
    { method: "POST", path: "/anime" },
    { method: "DELETE", path: "/anime/naruto" },
    { method: "PUT", path: "/characters/1" },
    { method: "PATCH", path: "/characters/1" },
    { method: "DELETE", path: "/characters/1" },
  ];

  return (
    <Box my={2}>
      <Heading as="h3" size="md">
        Routes
      </Heading>
      <Text mt={3} mb={4} fontSize="sm" fontWeight={0} color="#615B6D">
        All HTTP methods are supported
      </Text>
      {routes.map((route, index) => (
        <Flex
          key={index}
          w={{ base: "full", md: "md" }}
          justifyContent="space-between"
          fontFamily="Fira Sans"
          fontSize="sm"
        >
          <Text mb={2}>{route.method}</Text>
          {route.method === "GET" ? (
            <Text color="#f49700" as={Link} href={route.path}>
              {route.path}
            </Text>
          ) : (
            <Text>{route.path}</Text>
          )}
        </Flex>
      ))}
    </Box>
  );
};

export default ApiRoutes;
