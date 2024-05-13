import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';

const CourseModel = ({
  isOpen,
  onClose,
  id,
  deleteLuctureButtonHandler,
  courseTitle,
  addLectureHandler,
  Lectures = [1, 2, 3, 4, 5, 6],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };
  const handleClose = () => {
    setDescription('');
    setTitle('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody p={16}>
            <Grid gridTemplateColumns={['1fr', '3fr 1fr']}>
              <Box p={['0', '16']}>
                <Box my={5}>
                  <Heading children={courseTitle} />
                  <Heading children={`#${id}`} size={'sm'} opacity={'0.4'} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />
                {/* <VideoCard
                  num={1}
                  title={'React into'}
                  description="this is a into lecture, where you will learn the basics of React"
                  lectureId="adasdfasd"
                  courseId={id}
                  deleteLuctureButtonHandler={deleteLuctureButtonHandler}
                /> */}
                {Lectures.map((item, i) => (
                  <VideoCard
                    key={i}
                    num={i + 1}
                    title={'React into'}
                    description="this is a into lecture, where you will learn the basics of React"
                    lectureId="adasdfasd"
                    courseId={id}
                    deleteLuctureButtonHandler={deleteLuctureButtonHandler}
                  />
                ))}
              </Box>
              <Box>
                <form
                  action=""
                  onClick={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={'4'}>
                    <Heading
                      children={'Add Lectures'}
                      size={'md'}
                      textTransform={'uppercase'}
                    />
                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />

                    <Input
                      focusBorderColor="purple.300"
                      placeholder="Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />

                    <Input
                      accept="video/mp4"
                      required
                      type={'file'}
                      focusBorderColor="purple.300"
                      css={{
                        '&::file-selector-button': {
                          ...fileUploadCss,
                          color: 'purple',
                        },
                      }}
                      onChange={e => changeVideoHandler(e)}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button w={'full'} colorScheme="purple" type="submit">
                      Upload
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
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
      m={4}
      direction={['column', 'row']}
      borderRadious={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8 ']}
    >
      <Box>
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
