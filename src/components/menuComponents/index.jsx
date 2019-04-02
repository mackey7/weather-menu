import React from 'react';
import MenuItem from './menuItem'
import Header from './Header'

const MenuComponent = () => {
    return (
        <div>
            <Header text="Menu" />
            <MenuItem src="d" alt="zdjecie" title="nazwa produktu" price='12' />
        </div>
    )
}
export default MenuComponent;