import {Input, Button, } from '@chakra-ui/react'
import {useState} from 'react'
function Login(){

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
 
  });

  
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
        placeholder={"Password"}
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button
        colorScheme=" blue"
        w={"full"}
        size={"sm"}
        
      >
        Login
      </Button>
    </>
  )
}
export default Login;