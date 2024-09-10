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