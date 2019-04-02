import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <p>{props.title}</p>
    )
}

Title.propTypes = {
    title: PropTypes.string
}
export default Title;