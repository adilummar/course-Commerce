import {
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  VStack,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

function Courses() {
  const Course = ({views,description,title,imageSrc,id,addToPlaylistHandler,creator,lectureCount})=>{
    return (
        <VStack className='course' alignItems={['center','flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
             <Heading textAlign={['center','left']} maxW={'200px'} fontFamily={'sans-serif'} noOfLines={3} children={title} size={'sm'}/>
             <Text noOfLines={2} children={description}/>
             <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} children={'creator'} />
                <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} />
             </HStack>
             <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'} children={`  LECTURE - ${lectureCount}`}  />
             <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'} children={`  views - ${views}`}  />
             <Stack direction={['column','row']} alignItems={'center'}>
                <Link to={`/courses/${id}`}>
                    <Button  colorScheme='yellow'>
                        Watch Now
                    </Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>
                    Add to playlist
                </Button>
             </Stack>
        </VStack>
    )
  }
  const [keyword, setKeyword] = useState('');
  const [category,setCategory] = useState("")
  const addToPlaylistHandler = () =>{
    console.log('added to playlist')
  }
  const categories = [
    'web development',
    'artificial intelligence',
    'ui/ux designing',
    'algorithm and design',
    'data science',
    'web design'
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'10'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack overflow={"auto"} paddingY={'5'} css={{"&::-webkit-scrollbar":{display:"none"}}}>
        {categories.map((item,index) => (
          <Button key={index} marginTop={'10px'}  onClick={()=>setCategory(item)} minW={'60' } >
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack 
        direction={["column","row"]}
        flexWrap={'wrap'}
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
      >
        <Course title={'sample'} id={'sample'} description={'sample'} creator={'sample'} views={25} lectureCount={2} imageSrc={'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} addToPlaylistHandler={addToPlaylistHandler}/>
      </Stack>
    </Container>
  );
}

export default Courses;
