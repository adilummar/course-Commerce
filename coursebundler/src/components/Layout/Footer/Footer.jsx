import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {TiSocialYoutube,TiSocialInstagram} from "react-icons/ti"
import {DiGithub} from 'react-icons/di'
import React from 'react';

function Footer() {
  return (
    <Box padding={4} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All right reserved " color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@creative developer "
            color={'yellow'}
          />
        </VStack>
        <HStack spacing={["2","10"]} justifyContent={"center"} color={'white'} fontSize="50">
            <TiSocialYoutube/>
            <TiSocialInstagram/>
            <DiGithub/>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Footer;
