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
  
  function Request() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
  
    return (
      <Container  h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing='16'>
          <Heading children="Request New Course" />
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
              <FormLabel htmlFor="course" children="course" />
              <Textarea
                required
                id="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="Explain the course...."
                focusBorderColor="yellow.500"
              />
            </Box>
            <Button my={'4'} colorScheme="yellow" type="submit">
              send mail
            </Button>
          <Box my={'4'}>
              see available courses! {''}
              <Link to={'/courses'}>
                <Button colorScheme='yellow' variant={'link'}>click</Button>{''}  
              </Link>
              here
          </Box>
  
          </form>
        </VStack>
      </Container>
    );
  }
  

export default Request
