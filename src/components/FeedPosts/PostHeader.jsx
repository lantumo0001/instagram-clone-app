import {Flex, Avatar, Box, Text} from '@chakra-ui/react'
import {AiFillHeart} from 'react-icons/ai'
function PostHeader(){
  return <Flex justifyContent={'space-between'} alignItems={'center'} w='full' my={2}>
   <Flex alignItems={'center'} gap={2}>
     <Avatar src='/img1.png' alt='user profile picture' size="sm"/>
     <Flex fontSize={12} fontWeight={'bold'} gap={2}>
      as a Programmer
       <Box color = {'gray.500'}>
        1 hour ago
       </Box>
        
     </Flex>
   </Flex>
     <Box cursor='pointer'><Text
                             fontSize={12}
                             fontWeight={'bold'}
                             color={'blue.500'}
                             _hover={{color:'white'}}
                             transition={'all 0.2s ease-in-out'}
                             
                             >Unfollow</Text></Box>
  </Flex>
}
export default PostHeader;