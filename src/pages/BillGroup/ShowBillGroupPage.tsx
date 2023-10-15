import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import Header from "../../components/Pages/BillGroup/Header";
import CreateBillModal from "../../components/Pages/Bills/CreateBillModal";

function ShowBillGroupPage() {
  const {
    isOpen: isOpenCreateBill,
    onOpen: onOpenCreateBill,
    onClose: onCloseCreateBill,
  } = useDisclosure();

  return (
    <>
      <Box w={["100%", "500px", "700px"]} mx="auto">
        <Header />
        <Box paddingY={10}>
          <Heading fontSize="2xl">September 4, 2023</Heading>
          <Divider my={4} />
          <HStack
            display="flex"
            alignContent="center"
            justifyContent="center"
            height="30vh"
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <Text fontSize="2xl" marginBottom={5}>
                You want to add bills?
              </Text>
              <Button
                borderRadius="30px"
                paddingX={10}
                bg="yellow.400"
                paddingY={3}
                marginY={3}
                textColor="black"
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={onOpenCreateBill}
              >
                Add Bills
              </Button>
              <Link
                as={NavLink}
                to="/bills"
                textDecoration="underline"
                display="inline-block"
              >
                Skip for now
              </Link>
            </Box>
          </HStack>
        </Box>
      </Box>
      <CreateBillModal isOpen={isOpenCreateBill} onClose={onCloseCreateBill} />
    </>
  );
}

export default ShowBillGroupPage;
