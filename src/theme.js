import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Pixelify Sans', sans-serif`,  // para títulos
    body: `'Press Start 2P', sans-serif`,     // para textos normais
  },
});

export default theme;
