import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import CreateBillModal from "../Bills/CreateBillModal";

interface Props {
  children: ReactNode;
  headers: string[];
}

function BillsTable({ children, headers }: Props) {
  const {
    isOpen: isOpenCreateBill,
    onOpen: onOpenCreateBill,
    onClose: onCloseCreateBill,
  } = useDisclosure();

  return (
    <>
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
              onClick={onOpenCreateBill}
            >
              Add Item
            </Button>
          </TableCaption>
          <Thead>
            <Tr paddingY={4}>
              {headers.map((item, index) => (
                <Th
                  key={index}
                  fontFamily="heading"
                  fontSize="lg"
                  color="gray.800"
                  textTransform="capitalize"
                  paddingTop={10}
                >
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>
          {children}
        </Table>
      </TableContainer>
      <CreateBillModal isOpen={isOpenCreateBill} onClose={onCloseCreateBill} />
    </>
  );
}

export default BillsTable;
