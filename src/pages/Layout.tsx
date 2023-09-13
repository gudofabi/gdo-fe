import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
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
        <GridItem area="nav">
          <AppNav />
        </GridItem>
        <Outlet />
      </Grid>
      <FooterNav />
    </>
  );
}

export default Layout;
