import {Container} from "@chakra-ui/react";
import FeedPost from "./FeedPost"
function FeedPosts(){
  return <Container maxW={'container.sm'} py={10} px={2}>
    <FeedPost img='/img1.png' username='samuel suro' avatar='./img1.png'/>
    <FeedPost img='/img2.png' username='bruno surodf' avatar='./img2.png'/>
    <FeedPost img='/img3.png' username='samuel tesfaye' avatar='./img3.png'/>
    
  </Container>
}
export default FeedPosts