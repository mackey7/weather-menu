import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
text-align:center;
font-size:50px;
`;

const Header = props => {
    return (
        <H1>
            {props.text}
        </H1>
    )
}
Header.propTypes = {
    text: PropTypes.string
}
export default Header;