
import React from 'react';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const theme = extendTheme({
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },
});

const DashboardPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Sidebar />
            <Container ml={{ base: '0', md: '350px' }} mt="4" p="4">
            <Dashboard />
            </Container>
        </ChakraProvider>
    );
};

export default DashboardPage;
