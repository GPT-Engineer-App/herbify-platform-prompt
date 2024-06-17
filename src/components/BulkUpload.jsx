import React, { useState } from 'react';
import { Box, Button, Input, useToast } from '@chakra-ui/react';
import * as XLSX from 'xlsx';

const BulkUpload = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      console.log(json);
      // Simulate sending JSON data to the server
      toast({
        title: "File uploaded successfully.",
        description: "Check the console for the parsed data.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <Box p={4}>
      <Input type="file" accept=".csv, .xlsx, .xls" onChange={handleFileChange} mb={4} />
      <Button onClick={handleUpload} colorScheme="teal">Upload</Button>
    </Box>
  );
};

export default BulkUpload;