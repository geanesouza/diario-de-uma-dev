import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import Avatar from "../assets/avatar2.webp";

export default function About() {
  return (
    <VStack
      spacing={6} // espaço entre texto e imagem
      maxW="1000px"
      mx="auto"
      mt={10}
      px={2}
    >
      {/* Texto */}
      <Box width="100%">
      <VStack spacing={4} maxW="1000px" mx="auto" textAlign="justify">
        <Heading as="h2" size="xl" color="teal.600" >
          Sobre mim
        </Heading>

        <Text color="gray.500">
          Me chamo Geane Araújo, sou formada em Ciência da Computação pela Universidade Federal 
          do Amazonas - UFAM, tenho uma pós em Desenvolvimento Web e atuei por quase 3 anos com C# ( ~ 2 anos )
          e Node ( ~ 1 ano ). Tive uma breve experiência também com React. Em um dos meus primeiros 
          projetos onde atuei como Desenvolvedora Jr. usando C#, fiquei responsável por 
          implementar um agente de captura de imagens (socket de rede) usando linguagem VB – 
          a linguagem escolhida foi essa pelo fato da máquina ser um pouco antiga – 
          que era responsável por acessar uma máquina de placas de circuito eletrônico e 
          capturar a imagem produzida na tela dessa máquina para transmiti-la para o projeto 
          principal em C#, via API. Foi uma grande satisfação para mim ter tido essa experiência, 
          por ter sido um desafio no qual pude aprender bastante e contribuir com a equipe. 
          Atualmente tenho buscado desenvolver aplicações frontend e fullstack, no meu tempo livre, 
          com React, Node e C#, objetivando consolidar e aprofundar minha experiência nessas stacks.
        </Text>

        <Text color="gray.500">
          Porém, já faz algum tempinho que não estou atuando na área devido ter assumido um cargo público na área 
          jurídica em 2023, com a qual também me identifico bastante, porém, nunca deixei de tentar 
          conciliar minha rotina entre o serviço público e essa área que tanto amo: programação! 
          Sempre que posso estou me atualizando, fazendo cursos ou projetinhos pessoais para 
          acompanhar o mercado, já que minha carga horária do setor público é reduzida e me 
          permite isso!
        </Text>

        <Text color="gray.500">
          Por esta razão, resolvi criar este site! Como uma espécie de diário de anotações para 
          consolidar minha evolução como desenvolvedora. Meu objetivo é voltar a atuar no meu 
          tempo livre, seja como PJ, freela, contrato ou até CLT e portanto, essa é uma forma de 
          demonstrar meu empenho, dedicação, compromisso e evolução aos futuros recrutadores que 
          entrarem em contato.
        </Text>

        <Text color="gray.500">
          Ah, inclusive usei React na elaboração desse site para praticar um pouco mais! :)
        </Text>
      </VStack>

      </Box>

      {/* Imagem abaixo do texto */}
      <Image
        src={Avatar}
        alt="avatar"
        borderRadius="full"
        boxSize={{ base: "180px", md: "200px" }}
        objectFit="cover"
        boxShadow="lg"
      />
    </VStack>
  );
}
