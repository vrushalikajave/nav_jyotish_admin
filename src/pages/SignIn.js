
import React from 'react';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import SignIn from '../components/SignIn';
const theme = extendTheme({
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },
});

const SignInPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <div
                style={{
                    backgroundImage: `url(/background.jpg)`, // Set background image
                    backgroundSize: 'cover', // Cover the entire container
                    backgroundPosition: 'center', // Center the background image
                    minHeight: '100vh', // Minimum height to cover the viewport
                }}
            >
                <Container ml={{ base: '0', md: '350px' }} mt="4" p="4">
                    <SignIn />
                </Container>
            </div>
        </ChakraProvider>
    );
};

export default SignInPage;
