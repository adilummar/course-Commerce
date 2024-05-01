import {
  Container,
  VStack,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Welcome to CourseBundler" />

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={Link}>forgetpassword</Button>
            </Link>
          </Box>
          <Box>
            <Button my={'4'} colorScheme='yellow' type='submit'>login</Button>
          </Box>
          <Box>
            New user ? <Link to={'/register'}><Button colorScheme='yellow' variant={'link'}>Sign up</Button></Link>
            {' '}now
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Login;
