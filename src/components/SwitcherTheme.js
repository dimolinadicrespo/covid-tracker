import React from 'react';
import styled from '@emotion/styled';

const Chk = styled.input`
    position: absolute;
    top: 10px;
    right: 10px;
    -webkit-appearance: none;
    background-color: #757575;  
    width: 30px;
    height: 16px;  
    border-radius: 100px;
    transition: all ease 0.5s;  

    &:after{
        content: "";
        width: 14px;
        height: 14px;
        top: 1px;
        background-color: white;
        position: absolute;
        border-radius: 100px;
        right: 15px;    
        transition: all ease 0.5s;
    }

    &:checked&:after{
        right: 1px;            
    }
    &:checked{
        background-color: #2eb2ff;     
    }
`;


const dark = {
    name : 'dark',
    body_color: '#e0e0e0',    
    card_color: '#bdbdbd',    
    number_color: '#fafafa',    
    text_color: '#424242'    
};


const SwitcherTheme = ({theme, setTheme}) => {

    const changeTheme = (e) => {
        if (Object.entries(theme).length === 0) {
            localStorage.setItem('theme-data', JSON.stringify(dark));
            setTheme(dark);            
        } else {
            localStorage.setItem('theme-data', JSON.stringify({}));
            setTheme({});
        }               
    }

    return (
        <Chk type="checkbox" onChange={changeTheme} checked={Object.entries(theme).length === 0 ? false : true}/>
    );    
}
 
export default SwitcherTheme;