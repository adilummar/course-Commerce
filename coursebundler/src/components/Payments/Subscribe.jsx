import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Subscribe() {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading children={'Welcome'} my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow.400'} p={'4'} css={{borderRadius:'8px 8px 0 0'}}>
          <Text color={'black'} children={`pro pack - ₹299.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children="Join our pro pack and get access to all content"
            />
            <Heading size={'md'} children="₹299 only" />
            <Button my={'8'} colorScheme="yellow" width={'full'}>
              {' '}
              Buy now
            </Button>
          </VStack>
        </Box>
        <Box bg={'blackAlpha.600'} p={'4'} css={{borderRadius:'0 0 8px 8px'}}>
          <Heading
            color={'white'}
            size={'sm'}
            textTransform={'uppercase'}
            children="100% refundable in cancellation "
          />
          <Text size={'xs'} color={'white'} children="*Terms and conditions applied"/>
        </Box>
      </VStack>
    </Container>
  );
}

export default Subscribe;
