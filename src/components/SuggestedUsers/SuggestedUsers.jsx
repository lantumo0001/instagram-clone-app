import {VStack, Box, Container, Flex, Skeleton, SkeletonCircle, SkeletonText, Text} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";
function SuggestedUsers(){
  return <VStack py={8} px={6} gap={4} >
   <SuggestedHeader/>
   <Flex alignItems={'center'} justifyContent={"space-between"} w='full'>
     <Text fontSize={12} fontWeight={'bold'} coloe={'gray.500'}>suggested for you </Text>
     <Text fontSize={12} fontWeight={'bold'} color={'gray.100'} _hover={{color:'gray.400'}} transition={"all 0.3s ease-in-out"} cursor={'pointer'}>see all </Text>
   </Flex>
    <SuggestedUser name = 'addisu samuel' followers = {400} avatar = {'https://bit.ly/kent-c-dodds'}/>
    <SuggestedUser name = 'addisu samuel' followers = {400} avatar = {'https://bit.ly/kent-c-dodds'}/>
    <SuggestedUser name = 'addisu samuel' followers = {400} avatar = {'https://bit.ly/kent-c-dodds'}/>
   
   
    <Box fontSize={12} fontWeight={'bold'} color={'gray.500'} mt={5} alignItems={'start'}>
     &copy; 2023 all right reserved <Link href='#' target="_blank" color={"blue.500"} fontSize={500}>ln2</Link>
    </Box>
  </VStack>
}
export default SuggestedUsers