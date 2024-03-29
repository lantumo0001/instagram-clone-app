import {Container} from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader''
function ProfilePage(){
  return <Container maxW={'container.lg'} py={5}>
   <Flex py={10} px={4} pl={{base:'4', md:'10'}} maxW={'full'} mx={'auto'} flexDirection={'column'}>
     <ProfileHeader/>
   </Flex>
    <Flex
      px={{base:'4', md:'10'}}
      maxW={'full'}
      mx={'auto'}
      >
     <ProfileTabs/>
      <ProfilePosts/>
    </Flex>
  </Container>
}
export default ProfilePage