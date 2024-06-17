import React, { useState } from 'react';
import { Box, Input, Button, VStack, Select, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const HerbSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    uses: [],
  });

  const handleSearch = () => {
    onSearch(searchTerm, filters);
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
      <VStack spacing={4}>
        <Input
          placeholder="Search by herb name, disease, or usage"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select placeholder="Filter by type" onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="medicinal">Medicinal</option>
          <option value="culinary">Culinary</option>
          <option value="aromatic">Aromatic</option>
        </Select>
        <Input
          placeholder="Filter by location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <CheckboxGroup
          colorScheme="teal"
          onChange={(values) => setFilters({ ...filters, uses: values })}
        >
          <Stack spacing={2} direction="column">
            <Checkbox value="anti-inflammatory">Anti-inflammatory</Checkbox>
            <Checkbox value="antioxidant">Antioxidant</Checkbox>
            <Checkbox value="digestive">Digestive</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Button leftIcon={<SearchIcon />} colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </VStack>
    </Box>
  );
};

export default HerbSearch;