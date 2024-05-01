import React from 'react';
import './Home.css';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import vg from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM EXPERTS" size="2xl" />
            <Text
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable price"
            />
            <Link to={'./courses'}>
              <Button size="lg" colorScheme="yellow">
                EXPLORE MORE
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize="md"
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box p={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily={'body'}
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandBanner"
          justifyContent={'space-evenly'}
          marginTop={4}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
}

export default Home;
