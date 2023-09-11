import { HStack, Container, Image, Text } from "@chakra-ui/react";
import avatar from "../../assets/img/avatar.png";

function AppNav() {
  return (
    <Container maxW="1440px" w={["100%", "700px", "1440px"]}>
      <HStack padding="15px" justifyContent="space-between">
        <Text fontWeight="bold" fontSize="28px">
          g'do
        </Text>
        <Image
          src={avatar}
          boxSize="50px"
          boxShadow="0px 3px 10px rgba(0,0,0,.45)"
          borderRadius="30px"
        />
      </HStack>
    </Container>
  );
}

export default AppNav;
