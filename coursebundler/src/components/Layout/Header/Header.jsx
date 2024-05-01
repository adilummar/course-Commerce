import React from 'react';
import { RiDashboardFill, RiLogoutBoxFill, RiMenuFill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerBody,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// functions
function Header() {
    const logoutHandler = ()=>{
        console.log('logged out')
    }
  const isAuthenticated = true;
  const user ={
    role:"admin"
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkButton = ({ url = '/', title = 'home',onClose  }) => (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        height={'12'}
        width={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenuFill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(3px)'}>
          <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'} textAlign={'Center'}>
              {' '}
              COURSE BUNDLER
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <LinkButton onClose={onClose} url="/" title="home" />
                <LinkButton onClose={onClose} url="/courses" title="browse all courses" />
                <LinkButton onClose={onClose} url="/request" title="Request a course" />
                <LinkButton onClose={onClose} url="/contact" title="contact us " />
                <LinkButton onClose={onClose} url="/about" title="About us " />
                <HStack
                  justifyContent={'space-evenly'}
                  position="absolute"
                  bottom={'2rem'}
                  width="80%"
                >
                  {isAuthenticated ? (
                    <>
                      <VStack>
                        <HStack>
                          <Link onClick={onClose} to={'/profile'}>
                            <Button variant={'ghost'} colorScheme="yellow">
                              Profile
                            </Button>
                          </Link>
                          <Link onClick={onClose} to={'/profile'}>
                            <Button variant={'ghost'} onClick={logoutHandler}>
                              <RiLogoutBoxFill />
                              logout
                            </Button>
                          </Link>
                        </HStack>
                        {user && user.role === 'admin' && (
                          <Link onClick={onClose} to={'/admin/dashboard'}>
                            <Button colorScheme='purple' variant={'ghost'}> <RiDashboardFill/> Dashboard</Button>
                          </Link>
                        )}
                      </VStack>
                    </>
                  ) : (
                    <>
                      <Link onClick={onClose} to={'/login'}>
                        <Button colorScheme="yellow">Login</Button>
                      </Link>
                      <p>OR</p>
                      <Link onClick={onClose} to={'/signUp'}>
                        <Button colorScheme="yellow">sign Up</Button>
                      </Link>
                    </>
                  )}
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Header;
