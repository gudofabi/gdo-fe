import { Box, Flex } from "@chakra-ui/react";
import { Scroll, HouseLine, HandCoins } from "@phosphor-icons/react";
import FooterNavLink from "./FooterNavLink";

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
        <FooterNavLink to="/bills" icon={<Scroll size={32} />} />
        <FooterNavLink to="/" icon={<HouseLine size={32} />} />
        <FooterNavLink to="/owned" icon={<HandCoins size={32} />} />
      </Flex>
    </Box>
  );
}

export default FooterNav;
