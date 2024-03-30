import {Flex , Text, Avatar} from '@chakra-ui/react'
function Comment({ createdAt, username, profilePic, text }){
  return <Flex gap={4}>
  <Avatar src ={profilePic} name={username} />
  <Flex direction="column" gap={2}>
   <Text fontWeight={'bold'} fontSize={12}>
     {username}
   </Text>
   <Text fontWeight={500} fontSize={14}>
     {text}
   </Text>
    <Text fontSize={12} >
      {createdAt}
    </Text>
  </Flex>
  </Flex>
}
export default Comment;