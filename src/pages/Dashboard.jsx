import { useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import BulkUpload from "../components/BulkUpload";
import DashboardStats from "../components/Dashboard";
import HerbList from "../components/HerbList";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome, {user.email}</Text>
        <Button colorScheme="teal" onClick={handleLogout}>
          Logout
        </Button>
        <BulkUpload />
        <DashboardStats inventory={100} sales={50} userInteractions={200} />
        <HerbList herbs={[]} />
      </VStack>
    </Box>
  );
};

export default Dashboard;