import { Box, Link, Grid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BillCard from "../../components/Pages/Bills/BillCard";

function BillsIndexPage() {
  const gridNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Box display="flex" justifyContent="flex-end" maxW="100%">
        <Link
          as={NavLink}
          to="/bill-group/create"
          borderRadius="30px"
          paddingX={10}
          bg="gray.900"
          paddingY={3}
          textColor="white"
          _hover={{
            bg: "gray.700",
          }}
          marginBottom={8}
        >
          Add Bill Group
        </Link>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        width="100%"
      >
        {gridNumber.map((item) => (
          <BillCard item={item} key={item} />
        ))}
      </Grid>
    </>
  );
}

export default BillsIndexPage;
