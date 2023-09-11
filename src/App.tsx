import {
  Grid,
  GridItem,
  SimpleGrid,
  Card,
  CardBody,
  Container,
} from "@chakra-ui/react";
import AppNav from "./components/Layouts/AppNav";

function App() {
  const gridNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
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
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
            spacing={6}
            padding="10px"
          >
            {gridNumber.map((item) => (
              <Card
                bg="yellow.300"
                borderRadius={8}
                borderColor="yellow.200"
                overflow="hidden"
                width="100%"
                key={item}
              >
                <CardBody></CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </GridItem>
    </Grid>
  );
}

export default App;
