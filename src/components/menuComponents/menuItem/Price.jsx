import React from 'react';
import PropTypes from 'prop-types';

const Price = props => {
    return (
        <span>{props.price}</span>
    )
}
Price.propTypes = {
    price: PropTypes.number
}
export default Price;