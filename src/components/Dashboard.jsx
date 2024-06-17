import React from 'react';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react';

const Dashboard = ({ inventory, sales, userInteractions }) => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <Stat>
          <StatLabel>Inventory</StatLabel>
          <StatNumber>{inventory}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Sales</StatLabel>
          <StatNumber>{sales}</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            1.05%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>User Interactions</StatLabel>
          <StatNumber>{userInteractions}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            3.45%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;