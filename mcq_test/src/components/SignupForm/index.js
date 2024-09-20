import {useState} from 'react'
import Axios from 'axios'

import {ButtonContainer, Form, InputContainer, InputField, Label, SignupButton, SignUpContainer, StyledOption, StyledSelect} from './styledComponents'
import axios from 'axios'

const SignupForm = () => {
    const [fullName, setFullName] = useState("")
    const [selectedOption, selectOption] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    const options = [
        {value: 'class_1', label: 'Class 1'},
        {value: 'class_2', label: 'Class 2'},
        {value: 'class_3', label: 'Class 3'}
    ]

    const onChangeFullName = e => setFullName(e.target.vlue)

    const onChangeOption = e => selectOption(e.target.value)

    const onChangeUsername = e => setUsername(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onChangeEmail = e => setEmail(e.target.value)

    const onChangePhone = e => setPhoneNo(e.target.value)

    const onSubmitForm = async(e) =>{
        e.preventDefault()
        const server = 'http://localhost:4000/signup'

        const userDetails = {fullName, selectedOption, username, password, email, phoneNo}

        const response = await axios.post(server, userDetails)

        if(response.ok === true){
            console.log('User Created Successfully.')
        }
    }

    return (
        <SignUpContainer>
            <Form onSubmit={onSubmitForm}>
                <InputContainer>
                    <Label htmlFor='fullName'>Full Name</Label>
                    <InputField placeholder='Full Name' id='fullName' value={fullName} onChange={onChangeFullName}/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor='classOptions'></Label>
                    <StyledSelect id="classOptions" value={selectedOption} onChange={onChangeOption}>
                        {
                            options.map(option=>
                            <StyledOption key={option.value} value={option.value}>
                                {option.label}
                            </StyledOption>)
                        }
                    </StyledSelect>
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
                <InputContainer>
                    <Label htmlFor='phoneNo'>Phone No.</Label>
                    <InputField placeholder='Phone Number' id='phoneNo' value={phoneNo} onChange={onChangePhone}/>
                </InputContainer>
                <ButtonContainer>
                    <SignupButton type="submit">Signup</SignupButton>
                </ButtonContainer>
            </Form>
        </SignUpContainer>
    )
}

export default SignupForm


