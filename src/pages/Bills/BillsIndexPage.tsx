import { Box, Link, Grid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BillCard from "../../components/Pages/Bills/BillCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface BillGroup {
  id: number;
  date: string;
  total: number;
}

function BillsIndexPage() {
  const fetchBillGroup = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/bill-groups"
      );
      return response.data;
    } catch (error) {
      // Handle the error, maybe log it or re-throw
      console.error("There was an error fetching the bill group:", error);
      throw error;
    }
  };
  const { data: billGroup, isLoading } = useQuery({
    queryKey: ["bill-group"],
    queryFn: fetchBillGroup,
  });

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
          {billGroup.result.data.map((item: BillGroup) => (
            <BillCard item={item} key={item.id} />
          ))}
        </Grid>
      )}
    </>
  );
}

export default BillsIndexPage;
