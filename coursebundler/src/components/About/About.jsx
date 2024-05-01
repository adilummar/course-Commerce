import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding="8">
    <VStack>
      <Avatar
        src="https://media.licdn.com/dms/image/D5603AQEF9_O6dEVYlA/profile-displayphoto-shrink_800_800/0/1691845722939?e=1720051200&v=beta&t=gJUw3k8-HLgiDXZIg7Ncuej3fxANQfiVJA4F4Ehq6d4"
        boxSize={['40', '48']}
      />
      <Text children={'co-founder'} opacity={'0.5'} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children={'Adil ummer'} size={['md', 'lg']} />
      <Text
        children={
          'hi, i am a full-stack developer and a teacher, my vision is to provide max quality content to the learners'
        }
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      loop
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      children={'terms & condition'}
      size={'md'}
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={"scroll"}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading my="4" size={'xs'} children="refund only applicable for cancellation within 7 days"/>
    </Box>
  </Box>
);

function About() {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children={'About us'} textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text
          m={'8'}
          textAlign={['center', 'left']}
          children="we are a video streaming platform with some premium courses available only for premium users"
        />
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Check out course
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} /> 
      <HStack>
        <RiSecurePaymentFill />
        <Heading
          size="xs"
          textTransform={'uppercase'}
          fontFamily={'sans-serif'}
          children="payment is secured by razorpay"
        />
      </HStack>
    </Container>
  );
}

export default About;
