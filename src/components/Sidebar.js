import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Icon,
  useDisclosure,
  Box

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IoMdPerson, IoMdSettings, IoMdHelpCircle, IoMdLogIn, IoMdPersonAdd } from 'react-icons/io';

import React, { useState } from 'react';

import { MdDashboard, MdPerson } from 'react-icons/md';
import { FaUserAstronaut } from 'react-icons/fa';

export default function Sidebar() {
  const { isOpen, onClose } = useDisclosure();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Drawer
      isOpen={true} // Keeping the Drawer always open
      placement='left'
      onClose={onClose}
      // Adding sticky position style directly to the Drawer
      style={{ position: 'sticky', top: 0, bottom: 0, overflowY: 'auto', width: '100px' }}
    >
      <DrawerOverlay style={{ backgroundColor: 'rgba(210, 210, 210, 0.5)' }} />
      <DrawerContent
        style={{
          borderRadius: '20px', background: 'rgba(0, 0, 0, 0.8)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          marginTop: '20px',
          marginBottom: '20px',
          marginLeft: '20px'
        }}
      >
        {!isMinimized && (
          <>
            {/* <DrawerHeader style={{ backgroundColor: 'transparent', color: '#319795', fontWeight: 'bold', padding: '1rem' }}>Nav Jyotish Admin</DrawerHeader> */}

            <DrawerHeader
              style={{
                backgroundColor: 'transparent',
                color: '#fff', // Setting text color to white
                fontWeight: 'bold',
                padding: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)' // Adding bottom border
              }}
            >
              Nav Jyotish Admin
            </DrawerHeader>
            <DrawerBody style={{

              marginTop: '20px',
              marginBottom: '20px',
              marginLeft: '20px'
            }}>
              <Box mb={2}>
              <Link to="/dashboard">
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={MdDashboard} />} onClick={onClose}>
                  Dashboard
                </Button>
                </Link>
              </Box>
              <Box mb={2}>
              <Link to="/user">
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={MdPerson} />} onClick={onClose}>
                  User
                </Button>
                </Link>
              </Box>
              <Box mb={2}>
              <Link to="/astrologer">
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={FaUserAstronaut} />} onClick={onClose}>
                  Astrologers
                </Button>
                </Link>
              </Box>

              <Box mb={2}>
              <Link to="/signin">
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoMdLogIn} />} onClick={onClose}>
                  Sign In
                </Button>
                </Link>
              </Box>
              <Box mb={2}>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoMdPersonAdd} />} onClick={onClose}>
                  Sign Up
                </Button>
              </Box>
              <Box mb={2}>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoMdSettings} />} onClick={onClose}>
                  Settings
                </Button>
              </Box>
              <Box mb={2}>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoMdHelpCircle} />} onClick={onClose}>
                  Help
                </Button>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}










