import {AvatarGroup, Flex, Avatar, VStack, Button, Text} from '@chakra-ui/react'
function ProfileHeader(){
  return <Flex gap={{base:4, sm:10}} py={10} direction={{base:'column', sm:'row'}}>
  <AvatarGroup 
    alignSelf={'center'}
    justifySelf={'flex-start'}
    size={{base:'xl', md:'2xl'}}
    maxW={'full'}
    spacing={4}
    mx={'auto'}
    
    >
  <Avatar name='as a programmer' src='./profilepic.png' alt='as a programmer logo'/>
  </AvatarGroup>
    <VStack alignItems={'flex-start'} gap={2} mx={'auto'} flex={1}>
    <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} w='full'>
     <Text fontSize={{base:'xs', sm:'sm'}} >as a Programmer</Text>
      <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
      <Button bg={'white'} color="black" _hover={{bg:'whiteAlpha.800'}} size={{base:'xs', md:'sm'}}>
       Edit Profile
      </Button>
      </Flex>
    </Flex>
      <Flex alignItems={'center'} gap={{base:2, sm:4}}>
        <Text fontSize={{base:'xs', md:'sm'}}>
          4Posts
        </Text>
        <Text  >
          <Text fontWeight={'bold'} fontSize={14} as='span'>
            1234
          </Text>
          Followers
        </Text>
        <Text fontSize={{base:'xs', sm:'sm'}} >
          <Text fontWeight={'bold'} fontSize={14} as='span'>
            1234
          </Text>
          Following
        </Text>
      </Flex>
     <Flex gap={4} alignItems={'center'} fontWeight={'bold'} fontSize={{base:'xs', sm:'sm'}} >as a programmer</Flex>
      <Text fontSize={{base:'xs', sm:'sm'}}  >Titorials that meant to level up your skill as programmer</Text>
    </VStack>
  </Flex>
}
export default ProfileHeader