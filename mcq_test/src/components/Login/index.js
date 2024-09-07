import { useState } from 'react'

import {BGContainer, ButtonContainer, Form, FormContainer, FormHeading, InputContainer, InputField, Label, LoginButton, SignupButton} from './styledComponents'

const Login = () =>{
    const [username, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userDetails, setUserDetails] = useState({})

    const onChangeUsername = e => setName(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onSubmitForm = e => {
        e.preventDefault()
        setUserDetails({username, password})
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