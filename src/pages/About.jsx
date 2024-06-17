import { Box, Text, Heading } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>About Herb Management System</Heading>
    <Text fontSize="lg">
      The Herb Management System allows administrators to manage herb details, track inventory, and analyze data efficiently.
    </Text>
  </Box>
);

export default About;