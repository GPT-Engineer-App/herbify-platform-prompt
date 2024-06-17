import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-between" align="center">
      <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
        Home
      </Link>
      <Link as={RouterLink} to="/about" color="white" fontSize="lg" fontWeight="bold">
        About
      </Link>
      <Link as={RouterLink} to="/contact" color="white" fontSize="lg" fontWeight="bold">
        Contact
      </Link>
      <Link as={RouterLink} to="/login" color="white" fontSize="lg" fontWeight="bold">
        Login
      </Link>
      <Link as={RouterLink} to="/dashboard" color="white" fontSize="lg" fontWeight="bold">
        Dashboard
      </Link>
    </Flex>
  </Box>
);

export default Navbar;