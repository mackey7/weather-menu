import React from 'react';
import Image from "./Image"
import Title from './Title'
const MenuItem = () => {
    return (
        <div>
            <Image src={props.src} alt={props.alt} />
            <Title title={props.title} />

        </div>
    )
}
export default MenuItem;