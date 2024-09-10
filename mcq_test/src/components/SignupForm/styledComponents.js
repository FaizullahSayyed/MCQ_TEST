import {styled} from 'styled-components'

export const BGContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    background: linear-gradient(to bottom, #a3bded, #6991c7);
`

export const FormContainer = styled.div`
    /* height: 300px; */
    width: 400px;
    background-color: #ffffff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const FormHeading = styled.h1`
    color: #dfa579;
`

export const Form = styled.form`
    width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    /* height: 60px; */
`

export const Label = styled.label`
    color: #13547a;
    font-weight: 700;
    margin-bottom:10px;
    margin-top: 10px;
`

export const InputField = styled.input`
    border: 1px solid #dfa579;
    border-radius: 4px;
    /* height: 25px; */
    padding: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 18px;
`

export const LoginButton = styled.button`
    border: 0;
    border-radius: 7px;
    padding: 10px;
    background-color: #13547a;
    color: #ffffff;
    font-weight: 700;
    width: 80px;
    cursor: pointer;
`

export const SignupButton = styled.button`
    border: 2px solid #13547a;
    background-color: #ffffff;
    color: #13547a;
    padding: 10px;
    border-radius: 7px;
    font-weight:700;
    width: 80px;
    cursor: pointer;
`

export const SignUpContainer = styled.div``

export const StyledSelect = styled.select``

export const StyledOption = styled.option``