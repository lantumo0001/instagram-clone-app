
import {useState} from 'react'
import {NotificationsLogo, CommentLogo, CreatePostLogo, UnlikeLogo} from '../../assets/contants'
import {Flex, Button, Box, Text,InputRightElement,  Heading, Image, Link, InputGroup, Input} from "@chakra-ui/react"
function PostFooter(){
 const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [likes, setLikes] = useState(10);

  function handleLike(){
    if(isLiked){
      setLikes(likes - 1);
      setIsLiked(false);
    }else{
      setLikes(likes + 1);
      setIsLiked(true);
    }
    
  }
  
  return <Box mb={10}>
    <Flex alignItems={'center'} gap={4} w='full' pt={0} mb={2} mt={2}>
         <Box cursor='pointer' fontSize={18} onClick={handleLike}>{!isLiked ? <NotificationsLogo/> : < UnlikeLogo/>}</Box>
      <Box fontSize={18} cursor='pointer'><CommentLogo/></Box>

    </Flex >
    <Text fontWeight={600} fontSize={'sm'}>{likes} likes</Text>
    <Text fontWeight={'sm'} fontSize={'sm'}>
      as a programmer
      <Text as={'span'} color={'gray.500'} ml={2} fontSize={'sm'}>
        feeling good
      </Text>
    
    </Text>
    <Text fontSize={'sm'} color = {'gray'}>view all 1000 comments </Text>
    <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w='full'>
     <InputGroup>
       <Input variant='flushed' placeholder={'add a comment...'} fontSize={14}/>
       <InputRightElement width={4}>
       <Button fontWeight={600} fontSize={14} _hover={{color:'white'}} bg={'transparent'} color={'blue.500'} >post</Button>
       </InputRightElement>
     </InputGroup>
    </Flex>
  </Box>
}
export default PostFooter;