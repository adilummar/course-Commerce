import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState()
    const [newPassword, setNewpassword] = useState()
  return (
    <Container py={'16'} minH={'90vh'} >
        <form >
            <Heading my={'16'} textAlign={['center','left']} children="Change Password" textTransform={'uppercase'}/>
            <VStack spacing={'8'}>
            <Input
              required
              id="oldPassword"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Enter your old password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Input
              required
              id="newPassword"
              value={newPassword}
              onChange={e => setNewpassword(e.target.value)}
              placeholder="Enter your new password"
              type="password"
              focusBorderColor="yellow.500"
            />

            <Button w={'full'} colorScheme='yellow' type='submit'>Change</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword