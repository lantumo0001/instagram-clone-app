import { Container, Flex, Box, Image, VStack , Button} from "@chakra-ui/react";
// import Auth components
import AuthForm from "../../components/AuthForm/AuthForm";
function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.md"} padding={"0"}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"5"}>
          {/* left hand side  */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="phone image" />
          </Box>

          {/* right hand side  */}
          <VStack spacig={4} align={'stretch'}>
            
            <AuthForm />
            <Box textAlign={"center"}>get an App </Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="playstore logo" />
              <Image src="/microsoft.png" h={10} alt="microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}
export default AuthPage;
