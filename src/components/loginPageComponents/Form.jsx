import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx'
const Form = () => {
    return (
        <form action="">
            <Input type="text" placeholder="e-mail" />
            <Input type="password" placeholder="password" />
            <Button value="Log In" />
        </form>
    )
}
export default Form