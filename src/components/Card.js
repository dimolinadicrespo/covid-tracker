import React from 'react';
import styled from '@emotion/styled';
import AnimatedNumber from 'animated-number-react';
import moment from 'moment';

const CardStyled = styled.div`
    margin: 5px;    
    background-color: ${props => props.theme.card_color};
    transition: all ease 0.8s;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    min-width: 200px;
    padding: 16px;
    border-bottom: 5px solid ${props => props.color || 'turquoise'};
    border-top-left-radius: 50px 20px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
`;

const Icon = styled.i`
    color: ${props => props.color || 'inherit'};
    margin-right: 5px;
`;

const Title = styled.div`
    font-size: 18px;
`;

const AnimatedNumberContainer = styled.span`
    font-size: 30px;
    color: ${props => props.theme.number_color || '#9e9e9e'};
    transition: all ease 0.5s;
`;

const TextMuted = styled.span`
    color: ${props => props.theme.number_color || '#777'};
    font-size: 15px;
    transition: all ease 0.5s;
`;


const Card = ({color, type, numberCases, loading}) => {   

    const formatValue = (number) => new Intl.NumberFormat("es-ES").format(number);
       
    return (
    <CardStyled color={color}>
        <Title>
            <Icon color={color} className={loading ? 'fas fa-spinner fa-pulse' : 'fas fa-virus'} ></Icon>                                            
            <span>{type}</span>
        </Title>
        <AnimatedNumberContainer>
            <AnimatedNumber 
                value={numberCases}
                formatValue={formatValue}
                duration={300}/>
        </AnimatedNumberContainer>
        <TextMuted>Number of cases {type} at {moment().format('ll')}</TextMuted>        
    </CardStyled>
    );
}
 
export default Card;