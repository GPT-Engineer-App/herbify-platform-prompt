import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, useToast, Link } from "@chakra-ui/react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === "Admin" && password === "admin123@") {
      toast({
        title: "Login successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } else {
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
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
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

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
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
        <Button colorScheme="blue" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
        <Button colorScheme="facebook" onClick={handleFacebookLogin}>
          Login with Facebook
        </Button>
        <Text>
          Don't have an account?{" "}
          <Link as={RouterLink} to="/signup" color="teal.500">
            Sign Up
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;