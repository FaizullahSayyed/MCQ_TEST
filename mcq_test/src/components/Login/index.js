import { useState } from 'react'
import axios from 'axios'

import {BGContainer, ButtonContainer, Form, FormContainer, FormHeading, InputContainer, InputField, Label, LoginButton, SignupButton} from './styledComponents'

const Login = () =>{
    const [username, setName] = useState("")
    const [password, setPassword] = useState("")

    const onChangeUsername = e => setName(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onSubmitForm = async (e) => {
        e.preventDefault()
        const serverAddress = 'http://localhost:4000/login'
        
        const response = await axios.post(serverAddress, {username, password})
        // console.log(response)
    }

    return (
    <BGContainer>
        <FormContainer>
            <Form onSubmit={onSubmitForm}>
            <InputContainer>
                <FormHeading>Login</FormHeading>
                <Label htmlFor='username'>USERNAME</Label>
                <InputField type="text" id="username" value={username} onChange={onChangeUsername}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor='password'>PASSWORD</Label>
                <InputField type="password" id="password" value={password} onChange={onChangePassword}/>
            </InputContainer>
            <ButtonContainer>
                <LoginButton type="submit">Login</LoginButton>
                <SignupButton>Signup</SignupButton>
            </ButtonContainer>
            </Form>
        </FormContainer>
    </BGContainer>
    )
}

export default Login