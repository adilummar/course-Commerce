import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
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
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'adil ummer',
    email: 'madilummer@gmail.com',
    date: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: undefined,
    },
    playList: [
      {
        course: 'alskdflas',
        poster: 'asldfkjas',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const ChangeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            {' '}
            change photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Crated at" fontWeight={'bold'} />
            <Text children={user.date.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button>cancel subscription</Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="playlist" size={'md'} my={'8'} />
      {user.playList.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playList.map((element, index) => (
            <VStack w={'48'} m={'2'} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/courses/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    {' '}
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        ChangeImageSubmitHandler={ChangeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, ChangeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const ChangeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const CloseHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={CloseHandler}>
      <ModalOverlay backdropFilter={'blue(10px)'} />
      <ModalContent>
        <ModalHeader>chanege photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => ChangeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  my={'5'}
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={ChangeImage}
                />
                <Button
                  ChangeImageSubmitHandler={ChangeImageSubmitHandler}
                  w={'full'}
                  colorScheme="yellow"
                  type="submit"
                >
                  Change photo
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={'3'} onClick={CloseHandler}>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
