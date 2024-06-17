import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = async () => {
    if (!validatePassword(password)) {
      toast({
        title: "Password validation failed.",
        description: "Password must be at least 8 characters long and include a combination of small letters, capital letters, numbers, and special characters.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!otpSent) {
      // Simulate sending OTP to email and mobile
      setOtpSent(true);
      toast({
        title: "OTP sent.",
        description: "OTP has been sent to your email and mobile number.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (otp !== "123456") { // Simulate OTP validation
      toast({
        title: "OTP validation failed.",
        description: "Invalid OTP. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signup successful.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Signup failed.",
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
        <Heading>Signup</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {otpSent && (
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        <Button colorScheme="teal" onClick={handleSignup}>
          {otpSent ? "Validate OTP and Signup" : "Send OTP"}
        </Button>
      </VStack>
    </Box>
  );
};

export default Signup;