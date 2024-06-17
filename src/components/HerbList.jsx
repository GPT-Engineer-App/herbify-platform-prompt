import React from 'react';
import { Box, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';

const HerbList = ({ herbs }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
      {herbs.map((herb) => (
        <Box key={herb.id} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
          <Image src={herb.imageUrl} alt={herb.name} />
          <Box p={4}>
            <VStack spacing={2} align="start">
              <Text fontSize="xl" fontWeight="bold">{herb.name}</Text>
              <Text>{herb.description}</Text>
              <Text fontSize="sm" color="gray.500">Location: {herb.location}</Text>
              <Text fontSize="sm" color="gray.500">Uses: {herb.uses.join(', ')}</Text>
            </VStack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default HerbList;