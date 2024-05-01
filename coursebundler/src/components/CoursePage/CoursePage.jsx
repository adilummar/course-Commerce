import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introVideo from '../../assets/videos/intro.mp4';
import React, { useState } from 'react';

const lectureTitle = 'Lecture Title';
const CoursePage = () => {
    const [lectureNumber,setLecturenumber] = useState(0)
    const lecture = [
      {
        id: 'sample id',
        title: 'sample',
        description: 'this is the description',
        video: {
          url: 'sdfasd',
        },
      },{
        id: 'sample id',
        title: 'sample2',
        description: 'this is the description2',
        video: {
          url: 'sdfasd',
        },
      },{
        id: 'sample id',
        title: 'sample3',
        description: 'this is the description3',
        video: {
          url: 'sdfasd',
        },
      },
    ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lecture[0].title}`}
        />
        <Heading m={'4'} children={'Description'} />
      </Box>
      <VStack my={'4'}>
        {lecture.map((element, index) => (
          <Button textAlign={'center'}  w={'full'} borderBottom={'1px'} key={element._id} variant={'ghost'} onClick={()=>setLecturenumber(index)}>
            <Text>
              #{index + 1} {element.title}
            </Text>
          </Button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
