import { Box, Heading, Text, SimpleGrid, Image, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import projects from "../data/projectData";

export default function Projects() {
  return (
    <Box maxW="1800px" mx="auto" mt={10} p={4}>
      {/* Título da página */}
      <Heading as="h2" size="lg" color="whiteAlpha.900" mb={6}>
        Meus Projetos
      </Heading>

      {/* Grade de projetos */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {projects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <Image src={project.image} alt={project.title} h="300px" w="100%" objectFit="cover" />

            <Box p={4}>
              <Heading size="md" mb={2} color="teal.500">
                {project.title}
              </Heading>
              <Text fontSize="sm" mb={3}>
                {project.shortDesc}
              </Text>

              <Button 
                as={RouterLink}
                to={`/projects/${project.id}`}
                colorScheme="teal" 
                size="sm"
              >
                Ver mais
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Paginação */}
      <Box mt={10} textAlign="center">
        <Link as={RouterLink} to="/projects/page2" color="teal.500" fontWeight="bold">
          Próxima página →
        </Link>
      </Box>
    </Box>
  );
}
