import React from 'react';
import styled from 'styled-components';

const LoginButton = styled.input`
    padding:10px 20px;
    font-weight:600;
    font-size:20px;
    background: rgb(17, 33, 68);
    border:0;
    color:#fff;
    cursor:pointer;
    transition:1s;
    :hover{
        background: rgb(32, 66, 141);
    }
`;


const Button = (props) => {
    return (
        <LoginButton type="button" value={props.value} />
    )
}
export default Button