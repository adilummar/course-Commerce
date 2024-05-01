import {
    Container,
    VStack,
    Heading,
    FormLabel,
    Input,
    Box,
    Button,
    Avatar,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor:'pointer',
  marginLeft:'-5%',
  width:'110%',
  height:'100%',
  border:'none',
  color:'#ECC94B'
}

  const fileUploadStyle ={
    '&::file-selector-button': fileUploadCss 
   }
  
  function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('')

    const onImageChangeHandler = (e)=>{
      const file = e.target.files[0]
      const reader = new  FileReader()

      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        setImagePrev(reader.result)
        setImage(file)
      }
    }
    return (
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading textTransform={'uppercase'} children="register" />
  
          <form style={{ width: '100%' }}>
            <Box my={'4'} display={'flex'} justifyContent={'center'}>
              <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="abc"
                type="text"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type="email"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="password" children="password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                type="password"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box my={'4'}>
              <FormLabel htmlFor="chooseAvathar" children="Choose Avathar" />
              <Input
              accept='image/*'
                required
                placeholder="Enter your password"
                type={'file'}
                focusBorderColor="yellow.500"
                css={fileUploadStyle}
                onChange={onImageChangeHandler}
              />
            </Box>
  
           
            <Box>
              <Button my={'4'} colorScheme='yellow' type='submit'>Sign up</Button>
            </Box>
            <Box>
              Already signed up ? <Link to={'/login'}><Button colorScheme='yellow' variant={'link'}>Login</Button></Link>
              {' '}now
            </Box>
          </form>
        </VStack>
      </Container>
    );
  }
  
  export default Register;
  