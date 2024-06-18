import { useState } from "react";
import { Box, Button, Input, VStack, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminSettings = () => {
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("admin123@");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleUpdate = () => {
    if (newUsername && newPassword) {
      setUsername(newUsername);
      setPassword(newPassword);
      toast({
        title: "Credentials updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Update failed.",
        description: "Please provide both username and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto" mt={10}>
      <VStack spacing={4}>
        <Heading>Admin Settings</Heading>
        <Input
          placeholder="New Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <Input
          placeholder="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleUpdate}>
          Update Credentials
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminSettings;