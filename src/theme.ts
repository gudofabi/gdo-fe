import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({ config,
  fonts: {
    heading: `'Roboto Slab', sans-serif`,
    body: `'Merriweather Sans', sans-serif`,
  }, 
  colors: {
  gray: {
    50: '#f9f9f9',
    100: '#ededed',
    200: '#d3d3d3',
    300: '#b3b3b3',
    400: '#a0a0a0',
    500: '#898989',
    600: '#6c6c6c',
    700: '#202020',
    800: '#121212',
    900: '#111',
  },
  yellow: {
    50: '#FFF7DB',
    100: '#FFE8AD',
    200: '#FFD87D',
    300: '#FEC84B',
    400: '#FEB91A',
    500: '#E59F01',
    600: '#B27C00',
    700: '#805900',
    800: '#4D3500',
    900: '#1C1100',
  }
} });

export default theme;
