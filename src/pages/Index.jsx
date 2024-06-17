import { Container, Text, VStack } from "@chakra-ui/react";
import BulkUpload from "../components/BulkUpload";
import ExportData from "../components/ExportData";
import Dashboard from "../components/Dashboard";

const Index = () => {
  const sampleData = [
    { name: 'Herb 1', quantity: 10, price: 5 },
    { name: 'Herb 2', quantity: 20, price: 15 },
    // Add more sample data as needed
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Herb Management System</Text>
        <Text>Manage your herbs efficiently and effectively.</Text>
      <BulkUpload />
        <ExportData data={sampleData} />
        <Dashboard inventory={100} sales={50} userInteractions={200} />
      </VStack>
    </Container>
  );
};

export default Index;