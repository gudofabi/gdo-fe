import {
  Grid,
  GridItem,
  SimpleGrid,
  Card,
  CardBody,
  Container,
  Box,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";
import AppNav from "./components/Layouts/AppNav";
import FooterNav from "./components/Layouts/FooterNav";
import { HourglassMedium } from "@phosphor-icons/react";

function App() {
  const gridNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
      >
        <GridItem area="nav">
          <AppNav />
        </GridItem>
        <GridItem>
          <Container maxW="8xl" w={["100%", 700, 1440]} paddingTop={10}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                borderRadius="30px"
                paddingX={10}
                bg="gray.900"
                textColor="white"
                _hover={{
                  bg: "gray.700",
                }}
                marginBottom={8}
              >
                Add Bill Group
              </Button>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
              {gridNumber.map((item) => (
                <Card
                  bg="yellow.300"
                  borderRadius={8}
                  borderColor="yellow.200"
                  overflow="hidden"
                  width="100%"
                  key={item}
                  transition="transform 0.2s" // Add smooth transition for the hover effect
                  _hover={{
                    transform: "scale(1.05)", // Scale the box on hover
                    boxShadow: "xl", // Optionally add a stronger shadow on hover
                  }}
                >
                  <CardBody>
                    <Box
                      w="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Heading fontSize="lg" fontWeight="extrabold">
                        September 23,2023
                      </Heading>
                      <HourglassMedium size={32} />
                    </Box>
                    <Divider
                      borderColor="yellow.200"
                      marginTop={4}
                      marginBottom={4}
                    />
                    <Box w="100%" display="flex" justifyContent="flex-end">
                      <Heading
                        fontSize="lg"
                        fontWeight="extrabold"
                        fontFamily="body"
                      >
                        35,000.00
                      </Heading>
                    </Box>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </GridItem>
      </Grid>
      <FooterNav />
    </>
  );
}

export default App;
