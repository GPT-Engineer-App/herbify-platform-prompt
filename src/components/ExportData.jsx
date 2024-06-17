import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';

const ExportData = ({ data }) => {
  const headers = [
    { label: 'Herb Name', key: 'name' },
    { label: 'Quantity', key: 'quantity' },
    { label: 'Price', key: 'price' },
    // Add more headers as needed
  ];

  return (
    <Box p={4}>
      <Button colorScheme="teal">
        <CSVLink data={data} headers={headers} filename="herb_data.csv" style={{ color: 'white', textDecoration: 'none' }}>
          Export Data
        </CSVLink>
      </Button>
    </Box>
  );
};

export default ExportData;