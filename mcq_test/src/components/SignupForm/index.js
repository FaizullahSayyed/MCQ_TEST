import {useState} from 'react'

import {Form, InputContainer, Label, SignUpContainer, StyledOption, StyledSelect} from './styledComponents'

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
        {value: 'class_2', label: 'Class 3'}
    ]

    const onChangeFullName = e => setFullName(e.target.vlue)

    const onChangeOption = e => selectOption(e.target.value)

    const onChangeUsername = e => setUsername(e.target.value)

    const onChangePassword = e => setPassword(e.target.value)

    const onChangeEmail = e => setEmail(e.target.value)

    const onChangePhone = e => setPhoneNo(e.target.value)

    return (
        <SignUpContainer>
            <Form>
                <InputContainer>
                    <Label htmlFor='fullName'>Full Name</Label>
                    <InputContainer placeholder='Full Name' id='fullName' value={fullName}/>
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
            </Form>
        </SignUpContainer>
    )
}

export default SignupForm


