import React from 'react';
import styled from 'styled-components'

const H1 = styled.h1`
color:#fff;
padding:20px;
font-size:50px;
`

const Header = (props) => {
    return (
        <H1>{props.text}</H1>
    )
}
export default Header