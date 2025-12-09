import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";
import projects from "../data/projectData";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Box p={6}>
        <Heading color="red.500">Projeto não encontrado.</Heading>
      </Box>
    );
  }

  return (
    <Box maxW="1200px" mx="auto" mt={10} p={4}>
      {/* TÍTULO PRINCIPAL CENTRALIZADO */}
      <Heading
        as="h2"
        textAlign="center"
        size="xl"
        color="whiteAlpha.900"
        mb={12}
      >
        {project.title}
      </Heading>

      <Flex
        gap={10}
        flexDirection={["column", "column", "row"]}
        align="flex-start"
      >
        {/* COLUNA ESQUERDA */}
        <VStack flex="1" align="start" spacing={6}>
          {project.sections.map((section, index) => (
            <Box key={index}>
              <Heading as="h3" size="lg" color="teal.300" mb={3}>
                {section.subtitle}
              </Heading>

              {/* PARÁGRAFOS E LISTAS */}
              {section.content.map((item, i) => {
                // TEXTO
                if (item.type === "text") {
                  return (
                    <Text key={i} color="gray.300" mb={2} fontSize="lg">
                      {item.value}
                    </Text>
                  );
                }

                // LISTA
                if (item.type === "list") {
                  return (
                    <Box
                      as="ul"
                      key={i}
                      pl={5}
                      mb={2}
                      style={{ listStyleType: "disc" }}
                    >
                      {item.value.map((li, j) => (
                        <Box as="li" key={j}>
                          <Text color="gray.300" fontSize="lg">
                            {li}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                  );
                }

                return null;
              })}
            </Box>
          ))}
        </VStack>

        {/* COLUNA DIREITA (IMAGENS) */}
        <VStack flex="1" align="start" spacing={6}>
          {project.sections.map((section, index) => (
            <Image
              key={index}
              src={section.image}
              alt={section.subtitle}
              width={["100%", "80%", "100%"]}
              borderRadius="md"
              objectFit="cover"
              boxShadow="0 0 20px rgba(255, 255, 255, 0.3)"
            />
          ))}
        </VStack>
      </Flex>

      {/* Link do repositório */}
      {project.repository && (
        <Link
          href={project.repository}
          color="teal.400"
          isExternal
          fontWeight="bold"
          display="block"
          mt={20}
        >
          🧑‍💻 Repositório no GitHub
        </Link>
      )}

      {/* Botão voltar */}
      <Button as={RouterLink} to="/project" colorScheme="teal" mt={6}>
        ← Voltar para projetos
      </Button>
    </Box>
  );
}
