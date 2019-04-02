import React from 'react';
import Image from "./Image"
import Title from './Title'
import Price from './Price'
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    return (
        <div>
            <Image src={props.src} alt={props.alt} />
            <Title title={props.title} />
            <Price price={props.price} />
        </div>
    )
}
MenuItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,


}
export default MenuItem;