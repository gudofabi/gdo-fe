import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Header from "../../components/Pages/BillGroup/Header";

function BillGroupCreatePage() {
  const [startDate, setStartDate] = useState(null);

  return (
    <Box w={["100%", "500px", "700px"]} mx="auto">
      <Header />
      <Box py={10}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
          showYearDropdown
          scrollableYearDropdown
          placeholderText="date"
          customInput={
            <Input
              borderRadius={30}
              variant="filled"
              marginBottom={4}
              size="lg"
            />
          }
        />
        <Button
          borderRadius="30px"
          paddingX={10}
          bg="gray.900"
          paddingY={3}
          textColor="white"
          float="right"
          _hover={{
            bg: "gray.700",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default BillGroupCreatePage;
