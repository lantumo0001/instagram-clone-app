import {Flex, Box, Text, Heading, Image, Link, Avatar} from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom'
function SuggestedHeader(){
  return <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
     <Flex alignItems='center' gap={2}>
      <Avatar name="samuel suro" src="./profilepic.png" />
       <Text fontSize={12} fontWeight={'bold'}>as a programmer</Text>
     </Flex>  
    <Link
      as={RouterLink}
      to={'/auth'}
      fontSize={14}
      fontWeight={'bold'}
      color={'blue.500'}
      textDecoration={'none'}
      _hover={{textDecoration:'none'}}
      corsur={'pointer'}
      
      ></Link>
  </Flex>
}
export default SuggestedHeader