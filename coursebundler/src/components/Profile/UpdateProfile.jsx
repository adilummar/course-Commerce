import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          children="Change profile"
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your Name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            focusBorderColor="yellow.500"
          />

          <Button w={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
