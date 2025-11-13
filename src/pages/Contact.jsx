import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export default function Contact() {
  return (
    <VStack spacing={4} align="center" mt={10}>
      <Heading as="h2" size="xl" color="teal.600">
        Contato
      </Heading>
      <Text color="gray.500">Quer entrar em contato comigo? Me envie uma mensagem!</Text>
      <Link href="mailto:seuemail@email.com" color="teal.500" fontWeight="bold">
        ✉️ Enviar e-mail
      </Link>
      <Link href="https://linkedin.com/in/seuusuario" isExternal color="teal.500">
        💼 Meu LinkedIn
      </Link>
      <Link href="https://github.com/seuusuario" isExternal color="teal.500">
        🧑‍💻 Meu GitHub
      </Link>
    </VStack>
  );
}
