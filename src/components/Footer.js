import React from 'react';
import styled from '@emotion/styled';

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.text_color}; 
    padding: 10px; 
`;


const Footer = () => {
    return (<FooterStyled>© 2020 Covid19 Tracker</FooterStyled>)
}
 
export default Footer;

