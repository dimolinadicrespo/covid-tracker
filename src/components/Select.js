import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './../constant/countries.js';
import styled from '@emotion/styled';
import { countryToFlag } from './../helpers/helpers.js';


const SelecStyled = styled.div`
    width : 250px;
    margin: 0px auto 25px;
`;

const Select = ({setCountry, country, setLoading}) => {

    const defaultProps = {
        options: countries,
        getOptionLabel: (option) => countryToFlag(option.code)  + option.label,
    };

    const onChangeCountry = (event, value) =>{
        if (value !== null) {
            setLoading(true);
            setCountry(value);
        }  
    } 

    return (
        <SelecStyled>
            <Autocomplete
                {...defaultProps}
                id="Contries"
                placeholder='Global'
                value={country}                                               
                renderInput={(params) => <TextField {...params} label="Contries" margin="none" 
                />}
                onChange={onChangeCountry}
            />
        </SelecStyled>
    );
}
 
export default Select;
