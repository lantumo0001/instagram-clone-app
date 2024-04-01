
import { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import useSignupWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignupWithEmailAndPassword();
  return (
    <>
      <Input
        placeholder={"Email"}
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder={"username"}
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />

      <Input
        placeholder={"full name"}
        fontSize={14}
        size={"sm"}
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder={"Password"}
          fontSize={14}
          size={"sm"}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"gost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            <Text
              fontSize="sm"
              color="blue.200"
              _hover={{ color: "white" }}
              duration={"all 0.3s ease-in-out"}
            >
              {showPassword ? "hide" : "show"}
            </Text>
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      <Button
        colorScheme=" blue"
        w={"full"}
        size={"sm"}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        signup
      </Button>
    </>
  );
}
export default Signup;
