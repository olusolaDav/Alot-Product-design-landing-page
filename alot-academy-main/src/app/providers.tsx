'use client'

import "@fontsource/inter";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const fonts = {
  body: "'Inter', sans-serif",
  heading: "'Inter', san-serif",
}

/**
 * The color from figma is '#28275E'
 * which is 400, the rest is tinted & saturated
 * using HSB
 */
const colors = {
  brand: {
    50: "#CFCFFF",
    100: "#bbb9e7",
    200: "#6D6AFF",
    300: "#5451C4",
    400: "#28275E",
    500: "#28275E",
    600: "#3b3989",
    700: "#323176",
    800: "#181738",
    900: "#242355",
  },

  primary: "#F7971D",
  secondary: "#172D54",
  secondary100: "#2A4B73",
  purple: "#F845FC",
  gray: '#9D99AC',
  secondaryGradient: "linear-gradient(45deg, #1f141a 0%, #474b6d 100%)",
};

const buttonBaseStyle = defineStyle({
  fontWeight: "normal", // change the font weight to normal
  fontFamily: 'Roboto', // change the font family to monospaced
})

const buttonTheme = defineStyleConfig({
  baseStyle: buttonBaseStyle,
  defaultProps: {
      colorScheme: "brand",
  }
})

const styles = {
  global: {
    "html, body": {
      color: "#172D54",
    },
    a: {
     // color: "#172D54",
    },
  },
};

const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: { Button: buttonTheme }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}