import { Box, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "../assets/avatar3.webp";

export default function Home() {
  return (
    <VStack
      spacing={8} // 🔹 Espaço entre elementos
      align="center"
      textAlign="center"
      mt={20}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="2xl" color="teal.600">
        Olá! 👋 Eu sou a Geane
      </Heading>

      <Text
        fontSize="lg"
        maxW="700px"
        color="gray.500"
        textAlign="justify" // 🔹 Texto justificado
      >
        Sou desenvolvedora fullstack júnior apaixonada por programação!  
        Este é meu pequeno espaço profissional, onde compartilho meus projetos, aprendizados e trajetória.
        Busco sempre aprimorar minhas habilidades e criar soluções criativas e funcionais.
      </Text>

      <Image
        src={Avatar}
        alt="Foto de Geane"
        borderRadius="full"
        boxSize={{ base: "220px", md: "280px" }}
        objectFit="cover"
        mt={2} // 🔹 Pequeno espaço entre texto e imagem
        boxShadow="lg"
      />

      <Button
        as={RouterLink}
        to="/about"
        colorScheme="teal"
        size="lg"
        mt={4}
      >
        Saiba mais sobre mim
      </Button>

    


    </VStack>
  );
}
