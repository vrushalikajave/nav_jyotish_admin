
import React from 'react';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import User from '../components/User';

const theme = extendTheme({
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },
});

const UserPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Sidebar />
            <Container ml={{ base: '0', md: '350px' }} mt="4" p="4">
            <User />
            </Container>
        </ChakraProvider>
    );
};

export default UserPage;
