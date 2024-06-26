import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        color="white"
        placeholder={"Email"}
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder={"Password"}
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        colorScheme=" blue"
        w={"full"}
        size={"sm"}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Login
      </Button>
    </>
  );
}
export default Login;
