import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


function ResetPassword() {
    const [password,setPassword]=useState('') 
    const params = useParams()

    console.log(params.token)

    return <Container py={'16'} h={'90vh'}>
      <form>
          <Heading children="Reset password"
              my={'16'}
              textAlign={['center','left']}
              textTransform={'uppercase'}
          />
  
          <VStack spacing={'8'}>
          <Input
                required
                id="email"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter new password"
                type="password"
                focusBorderColor="yellow.500"
              />
              <Button type='submit' w={'full'} colorScheme='yellow'> reset password </Button>
          </VStack>
      </form>
    </Container>
}

export default ResetPassword
