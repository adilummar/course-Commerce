import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container  h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing='16'>
        <Heading children="Contact us" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="name Address" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="ABC"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="email" />
            <Input
              required
              id="password"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="enter your message...."
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my={'4'} colorScheme="yellow" type="submit">
            send mail
          </Button>
        <Box my={'4'}>
            Request for a course {''}
            <Link to={'/request'}>
              <Button colorScheme='yellow' variant={'link'}>click</Button>{''}  
            </Link>
            here
        </Box>

        </form>
      </VStack>
    </Container>
  );
}

export default Contact;
