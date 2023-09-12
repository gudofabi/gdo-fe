import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Scroll, HouseLine, HandCoins } from "@phosphor-icons/react";

function FooterNav() {
  return (
    <Box
      as="footer"
      bg="white"
      position="fixed" // Fixed positioning
      bottom={0} // Align to the bottom
      width="100%" // Full viewport width
      zIndex="sticky" // Ensure it stays above other content
    >
      <Flex justifyContent="center" gridGap={[10, 15, 20]} alignItems="center">
        <Link
          href="/about"
          color="gray.700"
          borderTop="2px"
          borderColor="white"
          paddingX="20px"
          paddingY="14px"
          _hover={{ color: "yellow.400", borderTop: "2px" }}
        >
          <Scroll size={32} />
        </Link>
        <Link
          href="/terms"
          color="gray.700"
          borderTop="2px"
          borderColor="white"
          paddingX="20px"
          paddingY="14px"
          _hover={{ color: "yellow.400", borderTop: "2px" }}
        >
          <HouseLine size={32} />
        </Link>
        <Link
          href="/privacy"
          color="gray.700"
          borderTop="2px"
          borderColor="white"
          paddingX="20px"
          paddingY="14px"
          _hover={{ color: "yellow.400", borderTop: "2px" }}
        >
          <HandCoins size={32} />
        </Link>
      </Flex>
    </Box>
  );
}

export default FooterNav;
