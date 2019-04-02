import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx'
import styled from 'styled-components'

const FormArea = styled.form`
    background: rgba(246, 246, 246, 0.287);
    padding:10px;
    display:flex;
    flex-direction:column;
`;


const Form = () => {
    return (
        <FormArea action="">
            <Input type="text" placeholder="e-mail" />
            <Input type="password" placeholder="password" />
            <Button value="Log In" />
        </FormArea>
    )
}
export default Form