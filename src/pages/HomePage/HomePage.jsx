import React from "react"; 
import { Flex , Container , Box} from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from '../..//components/SuggestedUsers/SuggestedUsers'

function HomePage() {
  return (
    
      <Container maxW={'container.lg'}>
      <Flex gap={20} >
      <Box flex={2} py={10} ><FeedPosts/></Box>
      <Box flex={3} mr={10} display={{base:'none', md:'block'}}><SuggestedUsers/></Box>
      </Flex>
      </Container>
  );
}

export default HomePage;
