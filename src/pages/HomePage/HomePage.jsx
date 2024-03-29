import React from "react";
import  PageLayout from "../../Layouts/pagelayout/PageLayout"; 
import { Button, Stack, Flex , Container , Box} from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from '../..//components/SuggestedUsers/SuggestedUsers'

function HomePage() {
  return (
    <PageLayout>
      <Container maxW={'container.lg'}>
      <Flex gap={20} >
      <Box flex={2} py={10} border={'1px solid blue'}><FeedPosts/></Box>
      <Box flex={3} mr={10} display={{base:'none', md:'block'}}><SuggestedUsers/></Box>
      </Flex>
      </Container>
    </PageLayout>
  );
}

export default HomePage;
