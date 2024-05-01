import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <Container h="90vh">
        <VStack justifyContent={"center"} h={'full'} spacing={'3'}>
            <RiErrorWarningFill size={'5rem'} />
            <Heading children="Payment Failed"/>
            <Link to={'/subscribe'}>
                <Button variant={'ghost'}>Try again</Button>
            </Link>
        </VStack>
    </Container>
  )
}

export default PaymentFailed
