import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  useToast,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { signIn } from '../actions/authActions';

import { useDispatch } from 'react-redux';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);


  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      email: email,
      password: password
    };
    // Make the API call


    fetch('https://api.nav-jyotish.com/api/v1/auth/signIn/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.json();
      })
      .then(data => {
        // Check if token is present in the response


        if (data.token) {
          // Store token in local storage
          localStorage.setItem('token', data.token);
          localStorage.setItem('tokenExpiry', Date.now()+ (1 * 60 * 60 * 1000));

          // Dispatch login action with email and password
          dispatch(signIn(email, password));
          toast({
            title: 'Login successful',
            description: `Welcome!`,
            status: 'success',
            duration: 5000, // 5 seconds
            isClosable: true,
          });
          // toast.success('Login successful'); // Toast success message
          navigate('/dashboard');
        } else {
          throw new Error('Token not found in response');
        }
      })
      .catch(error => {
        // Handle error
        console.error('Login failed:..', error.message);
        toast({
          title: 'Login failed',
          description: 'Please provide both username and password',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      
        // toast.error('Login failed: ' + error.message);

        // Dispatch an action indicating login failure
        // You might want to define a specific action for login failure in your authActions.js
        // dispatch(loginFailure());
      });
  };



  return (
    <Flex
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      flexDirection="column"
      width="25vw" // Adjust the width to be smaller
      height="50vh" // Adjust the height to be smaller
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
    >
      <Stack
        flexDir="column"
        mb="1"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "60%", md: "300px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"

              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default SignIn;
