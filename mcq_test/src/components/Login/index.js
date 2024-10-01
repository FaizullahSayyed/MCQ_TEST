import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { BGContainer, ButtonContainer, Form, FormContainer, FormHeading, InputContainer, InputField, Label, LoginButton, Message, SignupButton } from './styledComponents';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error message

  const onChangeUsername = (e) => {
    setError(null)
    setName(e.target.value);
}

  const onChangePassword = (e) => {
    setError(null)
    setPassword(e.target.value);
  }

  const navigate = useNavigate()

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const serverAddress = 'http://localhost:4000/login';

    const userCredentials = {username, password}

    try {
      const response = await axios.post(serverAddress, userCredentials);
        if(response.data.token){
                navigate("/")
        }else{
            setError(response.data)
        }
    //   console.log(response.data); // Assuming successful response has data
    //     // setError(response.data)
    //     console.log(response.data)
    //   // Handle successful login logic here (e.g., redirect to dashboard)
    } catch (error) {
    //   setError(error.data)
      setError(error.response.data)
    }
  };

  return (
    <BGContainer>
      <FormContainer>
        <Form onSubmit={onSubmitForm}>
          {error !== null && <Message className="error-message">{error}</Message>} {/* Display error message if present */}
          <InputContainer>
            <FormHeading>Login</FormHeading>
            <Label htmlFor='username'>USERNAME</Label>
            <InputField type="text" id="username" value={username} onChange={onChangeUsername} />
          </InputContainer>
          <InputContainer>
            <Label htmlFor='password'>PASSWORD</Label>
            <InputField type="password" id="password" value={password} onChange={onChangePassword} />
          </InputContainer>
          <ButtonContainer>
            <LoginButton type="submit">Login</LoginButton>
            <Link to="/signup"><SignupButton type="button">Signup</SignupButton></Link>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </BGContainer>
  );
};

export default Login;