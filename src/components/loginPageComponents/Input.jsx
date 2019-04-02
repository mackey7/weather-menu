import React from 'react';
import styled from 'styled-components'

const InputField = styled.input`
padding:10px 20px;
border:0;
margin-bottom:10px;
width:300px;
`

const Input = (props) => {
    return (
        <InputField type={props.type} placeholder={props.placeholder} />
    )
}
export default Input