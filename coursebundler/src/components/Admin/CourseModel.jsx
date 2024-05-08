import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModel = ({ isOpen, onClose, id,deleteLuctureButtonHandler, courseTitle,Lectures=[] }) => {
  return (
    <Modal isOpen={isOpen} size={'full'}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={16}>
            <Grid gridTemplateColumns={['1fr', '3fr 1fr']}>
              <Box p={['0', '16']}>
                <Box my={5}>
                  <Heading children={courseTitle} />
                  <Heading children={`#${id}`} size={'sm'} opacity={'0.4'} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                <VideoCard 
                num={1}
                title={'React into'}
                description='this is a into lecture, where you will learn the basics of React'
                lectureId="adasdfasd"
                courseId={id}
                deleteLuctureButtonHandler={deleteLuctureButtonHandler} />
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CourseModel;

function VideoCard({
  num,
  title,
  description,
  lectureId,
  courseId,
  deleteLuctureButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      borderRadious={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4','8 ']}
    >
      <Box >
        <Heading children={`#${num} ${title}`} size={'sm'} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteLuctureButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
