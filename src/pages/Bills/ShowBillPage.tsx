import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDate } from "../../shared/helpers.tsx";

import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import BillsTable from "../../components/Pages/BillGroup/BillsTable";

import {
  ArrowUUpLeft,
  DotsThreeOutlineVertical,
  PencilSimple,
  TrashSimple,
} from "@phosphor-icons/react";

interface Bills {
  id: number;
  name: string;
  amount: number;
}

function ShowBillPage() {
  const { billsId } = useParams();
  const navigation = useNavigate();

  const fetchBillGroup = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/bill-groups/${billsId}`
      );
      return response.data;
    } catch (error) {
      // Handle the error, maybe log it or re-throw
      console.error("There was an error fetching the bill group:", error);
      throw error;
    }
  };

  const { data: bills, isLoading } = useQuery({
    queryKey: ["bill-group", billsId],
    queryFn: fetchBillGroup,
  });

  const headers = ["Name", "Amount", "Action"];

  const func_billsMap = () => {
    return bills.result?.bills.map((item: Bills) => (
      <Tr key={item.id}>
        <Td>{item.name}</Td>
        <Td isNumeric>{item.amount}</Td>
        <Td></Td>
      </Tr>
    ));
  };

  return (
    <Box paddingBottom={20}>
      <HStack justifyContent="space-between" alignContent="center" paddingY={4}>
        <Button onClick={() => navigation(-1)} variant="ghost">
          <ArrowUUpLeft size={32} />
        </Button>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<DotsThreeOutlineVertical size={32} weight="fill" />}
            variant="ghost"
          />
          <MenuList>
            <MenuItem icon={<PencilSimple size={32} />}>Update</MenuItem>
            <MenuItem icon={<TrashSimple size={32} color="tomato" />}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Box paddingY={10}>
        <Heading fontSize="2xl">
          {bills?.result?.date ? formatDate(bills?.result?.date) : ""}
        </Heading>
      </Box>
      {isLoading ? (
        <Container textAlign="center">Loading...</Container>
      ) : (
        <>
          <BillsTable headers={headers}>
            <Tbody color="gray.600">
              {bills.result?.bills.length == 0 ? (
                <Tr>
                  <Td colSpan={3} textAlign="center">
                    No bills available
                  </Td>
                </Tr>
              ) : (
                func_billsMap()
              )}
            </Tbody>
          </BillsTable>

          <HStack justifyContent="space-between" paddingY={6}>
            <Box w={["0", "50%"]}></Box>
            <Box
              w={["100%", "50%"]}
              display="flex"
              justifyContent="space-between"
            >
              <Heading fontSize="2xl">Total Bills</Heading>
              <Heading fontSize="2xl">23,6000.00</Heading>
            </Box>
          </HStack>
        </>
      )}
    </Box>
  );
}

export default ShowBillPage;
