import React from 'react';
import MenuItem from './menuItem'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const MenuComponentWrapper = styled.div`
    background: rgb(204, 211, 238);
    min-height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
`;

const MenuContainer = styled.section`
    display:flex;
    flex-direction:column;
    align-content: space-between;
    justify-content:space-between;
    height:100%;
    margin:40px;
    padding:20px;
    width:80%;
    background: rgb(238, 236, 236);
`;
const MenuComponent = () => {
    return (
        <MenuComponentWrapper>
            <MenuContainer>
                <Header text="Menu" />
                <MenuItem src="img" alt="zdjecie" title="nazwa produktu" price='12' />
                <Footer />
            </MenuContainer>
        </MenuComponentWrapper>
    )
}
export default MenuComponent;