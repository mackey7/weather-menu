import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

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

Header.propTypes = {
    text: PropTypes.string
}
export default Header