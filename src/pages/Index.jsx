import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import BulkUpload from "../components/BulkUpload";
import ExportData from "../components/ExportData";
import Dashboard from "../components/Dashboard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Herb Management System</Text>
        <Text>Manage your herbs efficiently and effectively.</Text>
        <Button colorScheme="teal" onClick={() => navigate('/herbs')}>Browse Herbs</Button>
        <BulkUpload />
        <ExportData data={herbs} />
        <Dashboard inventory={100} sales={50} userInteractions={200} />
      </VStack>
    </Container>
  );
};

export default Index;