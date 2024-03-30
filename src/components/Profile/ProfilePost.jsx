import {
  Flex,
  Avatar,
  GridItem,
  Box,
  Image,
  Text,
  useDisclosure,
  VStack,
  
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillMessage, AiFillHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Comment from '../../components/Comment/Comment'
function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.200"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease-in-out"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex gap={2}>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"}>7</Text>
            </Flex>
            <Flex gap={2}>
              <AiFillMessage size={20} />
              <Text fontWeight={"bold"}>7</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex></Flex>
        <Image
          src={img}
          alt={"profile post"}
          w="100%"
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "2xl", sm: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#0f0f0f"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadiius={4}
                overflow={"hidden"}
                border="1px solid"
                borderColor="whiteAlpha.300"
                flex={1.5}
              >
                <Image
                  src={img}
                  alt={"profile post"}
                  w="100%"
                  h={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                dispaly={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="./profilepic.png"
                      size={"sm"}
                      name="as a programmer"
                    />
                    <Text fontSize={14} fontWeight={"bold"}>
                      as a programmer
                    </Text>
                  </Flex>
                  <Box
                    cursor={"pointer"}
                    _hover={{ bg: "whiteAlpha.300", color: "red.500" }}
                    transition="all 0.3s ease-in-out"
                    borderRadius={4}
                  >
                    <MdDelete size={20} />
                  </Box>
                </Flex>
                <Divider my={4} bg={'whiteAlpha.300'} />
                <VStack
                  w="full"
                  alignItems="start"
                  maxH={"350px"}
                  overflowY="auto"
                >
                  <Comment
                    createdAt="1 day ago"
                    username="as a programmer"
                    profilePic="./profilepic.png"
                    text="dummy images"
                  />
                  <Comment
                    createdAt="1 day ago"
                    username="as a programmer"
                    profilePic="./profilepic.png"
                    text="dummy images"
                  />
                  <Comment
                    createdAt="1 day ago"
                    username="as a programmer"
                    profilePic="./profilepic.png"
                    text="dummy images"
                  />
                </VStack>
                <Divider my={4} bg={'gray.800'}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ProfilePost;
