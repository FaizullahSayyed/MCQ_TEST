import {useState} from 'react'

const SignupForm = () => {
    const [fullName, setFullName] = useState("")
    const [selectedOption, selectOption] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, serPhoneNo] = useState("")

    const onChangeOption = e => selectOption(e.target.value)

    const onChangePhone = e => setPhoneNo(e.targer.value)

    const onChangeSignupUsername = e => 

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


