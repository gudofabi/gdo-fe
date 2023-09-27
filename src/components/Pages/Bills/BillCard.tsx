import { Link, Card, CardBody, Box, Heading, Divider } from "@chakra-ui/react";
import { Hourglass } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { BillGroup } from "../../../pages/Bills/BillsIndexPage";

interface Props {
  item: BillGroup;
}

function BillCard({ item }: Props) {
  return (
    <Link
      as={NavLink}
      to={`/bills/${item}`}
      _hover={{ textDecoration: "none" }}
    >
      <Card
        bg="yellow.300"
        borderRadius={8}
        borderColor="yellow.200"
        overflow="hidden"
        width="100%"
        transition="transform 0.2s" // Add smooth transition for the hover effect
        _hover={{
          transform: "scale(1.05)", // Scale the box on hover
          boxShadow: "xl", // Optionally add a stronger shadow on hover
          cursor: "pointer",
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
              {item.date}
            </Heading>
            <Hourglass size={32} />
          </Box>
          <Divider borderColor="yellow.200" marginTop={4} marginBottom={4} />
          <Box w="100%" display="flex" justifyContent="flex-end">
            <Heading fontSize="lg" fontWeight="extrabold" fontFamily="body">
              {item.total}
            </Heading>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
}

export default BillCard;
