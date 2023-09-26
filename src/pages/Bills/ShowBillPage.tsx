import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ArrowUUpLeft,
  DotsThreeOutlineVertical,
  PencilSimple,
  TrashSimple,
} from "@phosphor-icons/react";
import { useParams, useNavigate } from "react-router-dom";

function ShowBillPage() {
  const { billsId } = useParams();
  const navigation = useNavigate();

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
        <Heading fontSize="2xl">September 29,2023 - {billsId}</Heading>
      </Box>
      <TableContainer borderTop="1px" borderBottom="1px" borderColor="gray.300">
        <Table variant="simple" size="lg">
          <TableCaption>
            <Button
              borderRadius="30px"
              paddingX={10}
              backgroundColor="yellow.400"
              paddingY={3}
              textColor="gray.800"
              _hover={{
                bg: "yellow.500",
              }}
              marginY={8}
            >
              Add Item
            </Button>
          </TableCaption>
          <Thead>
            <Tr paddingY={4}>
              <Th
                fontFamily="heading"
                fontSize="lg"
                color="gray.800"
                textTransform="capitalize"
                paddingTop={10}
              >
                Name
              </Th>
              <Th
                fontFamily="heading"
                fontSize="lg"
                color="gray.800"
                textTransform="capitalize"
                paddingTop={10}
              >
                Amount
              </Th>
              <Th
                fontFamily="heading"
                fontSize="lg"
                color="gray.800"
                textTransform="capitalize"
                paddingTop={10}
                textAlign="right"
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody color="gray.600">
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justifyContent="space-between" paddingY={6}>
        <Box w={["0", "50%"]}></Box>
        <Box w={["100%", "50%"]} display="flex" justifyContent="space-between">
          <Heading fontSize="2xl">Total Bills</Heading>
          <Heading fontSize="2xl">23,6000.00</Heading>
        </Box>
      </HStack>
    </Box>
  );
}

export default ShowBillPage;
