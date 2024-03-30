import {Container, Flex, Avatar} from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'


function ProfilePage(){
  return <Container maxW={'container.lg'} py={5}>
   <Flex py={10} px={4} pl={{base:4, md:10}} maxW={'full'} mx={'auto'} flexDirection={'column'}>
     <ProfileHeader/>
   </Flex>
    <Flex
      px={{base:2, md:4}}
      maxW={'full'}
      mx={'auto'}
      borderTop={'1px solid'}
      borderTopColor={'gray.200'}
      flexDirection={'column'}
      
      >
     <ProfileTabs/>
      <ProfilePosts/>
    </Flex>
  </Container>
}
export default ProfilePage