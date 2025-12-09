// src/data/projectData.jsx

import mySite from "../assets/meu-site.png";
import me from "../assets/sobre-mim.png"
import contacts from "../assets/contato.png";


const projects = [
  {
    id: 1,
    title: "Meu Site Pessoal",
    image: mySite,
    shortDesc: "Um site pessoal criado com o intuito de registrar novos conhecimentos e meu portfólio.",
    repository: "https://github.com/geanesouza/diario-de-uma-dev",
    sections: [
      {
        subtitle: "Objetivo",
        content: [
          { type: "text", value: "Apresentar meus projetos e jornada como desenvolvedora." }
        ],
        image: mySite,
      },
      {
        subtitle: "Tecnologias Utilizadas",
        content: [
          { type: "text", value: "React, Vite, React Router e Chakra UI." },
          { type: "text", value: "Estrutura moderna com componentes reutilizáveis." }
        ],
        image: me,
      },
      {
        subtitle: "Resumo",
        content: [
          { type: "text", value: "Possui páginas de navegação, tema consistente e layout responsivo." },
          { type: "text", value: "O modelo inclui:" },
          { 
            type: "list",
            value: [
              "Estrutura de páginas",
              "Navbar funcional",
              "Design responsivo",
              "Estilos via Chakra UI (sem precisar escrever CSS)",
              "Roteamento entre páginas."
            ]
          },
          { type: "text", value: "Desenvolvimento:" },
          { type: "text", value: " 1 - Criação do projeto" },
          { 
            type: "list",
            value: [
              
              "npm create vite@latest meu-site --template react",
              "cd meu-site",
              "npm install",              
            ]
          },
          { type: "text", value: " 2 - Instalação de dependências" },
          { 
            type: "list",
            value: [
              
              "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-router-dom",              
            ]
          },
          { type: "text", value: " 3 - Executar" },
          { 
            type: "list",
            value: [
              
              "npm run dev",              
            ]
          },
           { type: "text", value: " 4 - Hospedar" },
          { 
            type: "list",
            value: [
              
              "optei por conectar com vercel",              
            ]
          }
        ],
        image: contacts,
      },
    ],
  },
   {
    id: 2,
    title: "Sistema de monitoramento médico",
    image: mySite,
    shortDesc: "Um sisteminha básico de CRUD para controle de consultas médicas",
    repository: "https://github.com/geanesouza/diario-de-uma-dev",
    sections: [
      {
        subtitle: "Objetivo",
        content: [
          { type: "text", value: "Apresentar meus projetos e jornada como desenvolvedora." }
        ],
        image: mySite,
      },
      {
        subtitle: "Tecnologias Utilizadas",
        content: [
          { type: "text", value: "React, Vite, React Router e Chakra UI." },
          { type: "text", value: "Estrutura moderna com componentes reutilizáveis." }
        ],
        image: me,
      },
      {
        subtitle: "Resumo",
        content: [
          { type: "text", value: "Possui páginas de navegação, tema consistente e layout responsivo." },
          { type: "text", value: "O modelo inclui:" },
          { 
            type: "list",
            value: [
              "Estrutura de páginas",
              "Navbar funcional",
              "Design responsivo",
              "Estilos via Chakra UI (sem precisar escrever CSS)",
              "Roteamento entre páginas."
            ]
          },
          { type: "text", value: "Desenvolvimento:" },
          { type: "text", value: " 1 - Criação do projeto" },
          { 
            type: "list",
            value: [
              
              "npm create vite@latest meu-site --template react",
              "cd meu-site",
              "npm install",              
            ]
          },
          { type: "text", value: " 2 - Instalação de dependências" },
          { 
            type: "list",
            value: [
              
              "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-router-dom",              
            ]
          },
          { type: "text", value: " 3 - Executar" },
          { 
            type: "list",
            value: [
              
              "npm run dev",              
            ]
          },
           { type: "text", value: " 4 - Hospedar" },
          { 
            type: "list",
            value: [
              
              "optei por conectar com vercel", 
              "https://diario-de-uma-dev.vercel.app/"             
            ]
          }
        ],
        image: contacts,
      },
    ],
  },
];


export default projects;
