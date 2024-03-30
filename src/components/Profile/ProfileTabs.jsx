import { Flex, Text, Box, Button, useColorModeValue } from "@chakra-ui/react";
import { BsGrid3X3,BsBookmark  , BsSuitHeart} from "react-icons/bs";
function ProfileTabs() {
  return (
    <Flex
      w={"full"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontSize={{ base: "sm", sm: "lg" }}
      fontWeight={"bold"}
      color={useColorModeValue("gray.700", "gray.200")}
      alignItems={"center"}
      justifyContent={"center"}
    >
    <Flex borderTop={'1px solid white'} alignItems={'center'} p={3} gap={1} cursor={'pointer'} >
      <Box fontSize={20} ><BsGrid3X3 /></Box>
      <Text fontSize={12} display={{base:'none', sm:'block'}}>Posts</Text>
    </Flex>
  
    <Flex  alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
      <Box fontSize={20} ><BsBookmark /></Box>
      <Text fontSize={12} display={{base:'none', sm:'block'}}>Saved</Text>
    </Flex>
    <Flex  alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
      <Box fontSize={20} ><BsSuitHeart /></Box>
      <Text fontSize={12} display={{base:'none', sm:'block'}}>Likes</Text>
    </Flex>
     <Flex>
     </Flex>
      <Flex>
      </Flex>
    </Flex>
  );
}
export default ProfileTabs;
