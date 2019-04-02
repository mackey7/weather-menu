import React from 'react';
import Header from './Header.jsx'
import Form from './Form.jsx'
import styled from 'styled-components'

const Section = styled.section`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background: rgb(10, 63, 161);
min-width:100%;
height:100vh;

`;


const LoginPageWrapper = () => {
    return (
        <Section>
            <Header text="Login" />
            <Form />
        </Section>
    )
}
export default LoginPageWrapper