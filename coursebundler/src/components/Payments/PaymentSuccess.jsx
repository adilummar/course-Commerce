import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading my={'8'} textAlign={'center'} children="you have pro pack" />
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box bg={'yellow.400'} w="full" p={'4'} borderRadius={'5'}>
          <Text color={'black'}>payment success</Text>
        </Box>
        <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
          <Text>
            Congratulation you are a pro member. you have access to premium
            content
          </Text>
          <Heading size={'4xl'} >
            <RiCheckboxCircleFill />
          </Heading>
          <Link to={'/profile'}>
            <Button variant={"ghost"}>Go to profile</Button>
          </Link>
          <Heading size={'xs'} >
            Reference: kdsfkjsdljalsdj,ksjadlfjasld
          </Heading>
        </VStack>
      </VStack>
    </Container>
  );
}

export default PaymentSuccess;
