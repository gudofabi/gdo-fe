import { mode } from "@chakra-ui/theme-tools";
import { ButtonProps } from "@chakra-ui/react";

const baseStyle = {
  borderRadius: 0, // disable the border radius
  fontWeight: "normal", // change the font weight to normal
  fontFamily: "mono", // change the font family to monospaced
  bg: "gray.800",
  color: "white"
};

const sizes = {
  md: {
    fontSize: "sm", // Change font size to sm (14px)
  },
};

const customVariant = (props: ButtonProps) => {
  const { colorScheme: c } = props;
  return {
    bg: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      bg: mode(`${c}.600`, `${c}.300`)(props),
    },
    _active: {
      bg: mode(`${c}.700`, `${c}.400`)(props),
    },
  };
};

const variants = {
  custom: customVariant,
};

const defaultProps = {
  colorScheme: "gray",
  variant: "custom"
};

const buttonTheme = {
  baseStyle,
  sizes,
  variants,
  defaultProps
};

export { buttonTheme };
