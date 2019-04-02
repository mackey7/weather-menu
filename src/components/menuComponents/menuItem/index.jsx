import React from 'react';
import Image from "./Image"
import Title from './Title'
import Price from './Price'
const MenuItem = (props) => {
    return (
        <div>
            <Image src={props.src} alt={props.alt} />
            <Title title={props.title} />
            <Price price={props.price} />
        </div>
    )
}
export default MenuItem;