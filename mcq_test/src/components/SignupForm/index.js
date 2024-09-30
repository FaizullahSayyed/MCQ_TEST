import {useState} from 'react'
import axios from 'axios'

import {ButtonContainer, Form, InputContainer, InputField, Label, SignupButton, SignUpContainer} from './styledComponents'

const SignupForm = () => {
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const onChangeFullName = e => setFullName(e.target.value)

    const onChangeUsername = e => setUsername(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onChangeEmail = e => setEmail(e.target.value)

    const onSubmitForm = async(e) =>{
        e.preventDefault()
        const server = 'http://localhost:4000/signup'

        const userDetails = {fullName, username, password, email}

        const response = await axios.post(server, userDetails)

        console.log(response)
        // if(response.ok === true){
        //     console.log('User Created Successfully.')
        // }
    }

    return (
        <SignUpContainer>
            <Form onSubmit={onSubmitForm}>
                <InputContainer>
                    <Label htmlFor='fullName'>Full Name</Label>
                    <InputField type="text" placeholder='Full Name' id='fullName' value={fullName} onChange={onChangeFullName}/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='username'>Username</Label>
                    <InputField type="text" placeholder='User Name' id='username' value={username} onChange={onChangeUsername}/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='password'>Password</Label>
                    <InputField type="password" placeholder='Password' id='password' value={password} onChange={onChangePassword}/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='email'>Email</Label>
                    <InputField placeholder='E-mail' id='email' value={email} onChange={onChangeEmail}/>
                </InputContainer>
                <ButtonContainer>
                    <SignupButton type="submit">Signup</SignupButton>
                </ButtonContainer>
            </Form>
        </SignUpContainer>
    )
}

export default SignupForm


