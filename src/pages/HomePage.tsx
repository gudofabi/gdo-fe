import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { HourglassMedium } from "@phosphor-icons/react";

function HomePage() {
  const gridNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Box display="flex" justifyContent="flex-end" maxW="100%">
        <Button
          borderRadius="30px"
          paddingX={10}
          bg="gray.900"
          textColor="white"
          _hover={{
            bg: "gray.700",
          }}
          marginBottom={8}
        >
          Add Bill Group
        </Button>
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
          <Card
            bg="yellow.300"
            borderRadius={8}
            borderColor="yellow.200"
            overflow="hidden"
            width="100%"
            key={item}
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
                  September 23,2023
                </Heading>
                <HourglassMedium size={32} />
              </Box>
              <Divider
                borderColor="yellow.200"
                marginTop={4}
                marginBottom={4}
              />
              <Box w="100%" display="flex" justifyContent="flex-end">
                <Heading fontSize="lg" fontWeight="extrabold" fontFamily="body">
                  35,000.00
                </Heading>
              </Box>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
