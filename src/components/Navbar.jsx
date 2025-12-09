import { Flex, Box, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="blackAlpha.800"
      color="teal.600"
      padding="1rem"
      justify="space-between"
      align="center"
      wrap="wrap"    
    >
      <Heading as="h1" size="xl">
        Diário de uma Dev.
      </Heading>

      <Box>
        <Link as={RouterLink} to="/" px={3} _hover={{ textDecoration: "underline" }}>
          Início
        </Link>
        <Link as={RouterLink} to="/about" px={3} _hover={{ textDecoration: "underline" }}>
          Sobre
        </Link>
        <Link as={RouterLink} to="/contact" px={3} _hover={{ textDecoration: "underline" }}>
          Contato
        </Link>
         <Link as={RouterLink} to="/project" px={3} _hover={{ textDecoration: "underline" }}>
          Projetos
        </Link>
      </Box>
    </Flex>
  );
}
