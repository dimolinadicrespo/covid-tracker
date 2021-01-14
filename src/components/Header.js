import React from 'react';
import styled from '@emotion/styled';
import SwitcherTheme from './SwitcherTheme.js';

const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    align-items : center;
    justify-content : center;
`;

const Img = styled.img`
    width: 200px;
    height: 200px;
`;


const Header = ({theme, setTheme}) => {
    return (
        <HeaderContainer>
            <SwitcherTheme theme={theme} setTheme={setTheme}></SwitcherTheme>
            <Img src="logo.png" alt="" srcset=""/>
        </HeaderContainer>
    );
}
 
export default Header;