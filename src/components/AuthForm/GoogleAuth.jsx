import {  Flex, Text, Image } from "@chakra-ui/react"
function GoogleAuth() {
  return <>
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      <Image w={5} src="/google.png" alt="google logo" />
      <Text mx={1} color={"gray.400"}>
        Signup with Google
      </Text>
    </Flex>
  </>
}
export default GoogleAuth;