import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const InputField = styled.input`
    padding:10px 20px;
    border:0;
    margin-bottom:10px;
    width:300px;
    background:#fff;
`

const Input = (props) => {
    return (
        <InputField type={props.type} placeholder={props.placeholder} />
    )
}
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}
export default Input