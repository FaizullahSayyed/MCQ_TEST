import { useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'

import SignupForm from '../SignupForm'

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
                <Popup model trigger={
                    <SignupButton type="button">Signup</SignupButton>
                }
                contentStyle={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -70%)',
                    width: '400px', // Adjust width as needed
                    backgroundColor: '#fff', // Adjust background color
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow
                    outline: 'none',
                  }}
                  overlayStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Set background color and opacity for blur
                  }} 
                className="popup-content">
                    {close => (
                        <SignupForm />
                    )}

                </Popup>
                {/* <SignupButton>Signup</SignupButton> */}
            </ButtonContainer>
            </Form>
        </FormContainer>
    </BGContainer>
    )
}

export default Login