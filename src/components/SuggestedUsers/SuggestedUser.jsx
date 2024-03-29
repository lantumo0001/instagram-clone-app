import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Link,
  Avatar,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
function SuggestedUser({ name, followers, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} size={"md"} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={"bold"} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        padding={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color: "white"}}
        transition={'all 0.3s ease-in-out'}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "unfollow" : "follow"}
      </Button>
    </Flex>
  );
}
export default SuggestedUser;
