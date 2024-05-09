import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from './Login';
import  Signup from './Signup';
import GoogleAuth from './GoogleAuth'
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            h={44}
            cursor={"pointer"}
            src="/logo.png"
            alt="instagram logo"
          />
          {isLogin ? <Login/> : <Signup/>}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            my={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={2} fontSize={12} color={"gray.400"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
         <GoogleAuth prefix={isLogin ? 'Login' : 'Signup'}/>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        {" "}
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "don't have an account?" : "already have an account?"}
          </Box>
          <Box color={"blue.500"} cursor={"pointer"} onClick={()=>setIsLogin(!isLogin)}>
            {isLogin ? "signup" : "login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default AuthForm;
