import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login failed.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto" mt={10}>
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;