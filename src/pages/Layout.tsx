import { Outlet } from "react-router-dom";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import FooterNav from "../components/Layouts/FooterNav";
import AppNav from "../components/Layouts/AppNav";

function Layout() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
      >
        <GridItem area="nav" marginBottom={8}>
          <AppNav />
        </GridItem>

        <Container maxW="1280px">
          <Outlet />
        </Container>
      </Grid>
      <FooterNav />
    </>
  );
}

export default Layout;
