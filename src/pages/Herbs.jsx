import { Container, VStack } from "@chakra-ui/react";
import { useState } from 'react';
import HerbSearch from "../components/HerbSearch";
import HerbList from "../components/HerbList";

const Herbs = () => {
  const [herbs, setHerbs] = useState([
    { id: 1, name: 'Herb 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150', location: 'Location 1', uses: ['anti-inflammatory'] },
    { id: 2, name: 'Herb 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150', location: 'Location 2', uses: ['antioxidant'] },
    // Add more sample data as needed
  ]);
  const [searchResults, setSearchResults] = useState(herbs);

  const handleSearch = (searchTerm, filters) => {
    let results = herbs.filter(herb =>
      herb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      herb.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      herb.uses.some(use => use.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filters.type) {
      results = results.filter(herb => herb.type === filters.type);
    }

    if (filters.location) {
      results = results.filter(herb => herb.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.uses.length > 0) {
      results = results.filter(herb => filters.uses.every(use => herb.uses.includes(use)));
    }

    setSearchResults(results);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <HerbSearch onSearch={handleSearch} />
        <HerbList herbs={searchResults} />
      </VStack>
    </Container>
  );
};

export default Herbs;