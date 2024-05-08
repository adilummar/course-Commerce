import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'web development',
    'artificial intelligence',
    'ui/ux designing',
    'algorithm and design',
    'data science',
    'web design',
  ];

  const onImageChangeHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children={'create course'}
            textAlign={['center', 'left']}
            my={21}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter your Name"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              required
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              type="text"
              placeholder="Creator name"
              focusBorderColor="purple.300"
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>Category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              placeholder="Enter your password"
              type={'file'}
              focusBorderColor="purple.500"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={onImageChangeHandler}
            />
            {imagePrev && <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />}
            <Button w={'full'} colorScheme='purple' type='submit'> Create</Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourses;
