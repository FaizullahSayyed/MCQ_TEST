import { useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'

import SignupForm from '../SignupForm'

import {BGContainer, ButtonContainer, Form, FormContainer, FormHeading, InputContainer, InputField, Label, LoginButton, SignupButton, SignUpContainer, StyledOption, StyledSelect} from './styledComponents'

const Login = () =>{
    const [username, setName] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [selectedOption, selectOption] = useState("")
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, serPhoneNo] = useState("")

    const options = [{value: 'class_1', label: 'Class 1'},{value: 'class_2', label: 'Class 2'},{value: 'class_2', label: 'Class 3'}]

    const onChangeUsername = e => setName(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onChangeOption = e => selectOption(e.target.value)

    const onChangePhone = e => setPhoneNo(e.targer.value)

    const onChangeSignupUsername = e => 

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