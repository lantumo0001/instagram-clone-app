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
import { useNavigate} from "react-router-dom";
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function handleAuth() {
    if(!inputs.password || !inputs.email){
      alert(inputs.password && inputs.email ? "Please fill in all fields" : "Please fill in all fields");
      return
    }else{
      navigate('/')
    }
    
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Image h={44} cursor={"pointer"} src="/logo.png" alt="instagram logo" />

        <VStack spacing={4}>
          <Input
            placeHolder={"Email"}
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeHolder={"Password"}
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {isLogin ? (
            <Input
              placeHolder={"confirm password "}
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            colorScheme=" blue"
            w={"full"}
            size={"sm"}
            onClick={handleAuth}
          >
            {isLogin ? "login " : "signup"}
          </Button>
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
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        {" "}
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "don't have an account?" : "already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "signup" : "login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default AuthForm;
