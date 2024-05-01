import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ForgetPassword() {

    const [email,setEmail]=useState('') 

  return <Container py={'16'} h={'90vh'}>
    <form>
        <Heading children="forget password"
            my={'16'}
            textAlign={['center','left']}
            textTransform={'uppercase'}
        />

        <VStack spacing={'8'}>
        <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
            <Button type='submit' w={'full'} colorScheme='yellow'> get the link </Button>
        </VStack>
    </form>
  </Container>
}

export default ForgetPassword
