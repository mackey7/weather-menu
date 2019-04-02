import React from 'react';
import MenuItem from './menuItem'
import Header from './Header'
import Footer from './Footer'

const MenuComponent = () => {
    return (
        <div>
            <Header text="Menu" />
            <MenuItem src="img" alt="zdjecie" title="nazwa produktu" price='12' />
            <Footer/>
        </div>
    )
}
export default MenuComponent;