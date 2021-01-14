import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header.js';
import Card from './components/Card.js';
import Select from './components/Select.js';
import Footer from './components/Footer.js';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {fetchGlobalData, fetchCountryData, fetchCountryDataTimeLine, fetchGlobalDataTimeline} from './api';
import {isEmoji, formatDataToChart} from './helpers/helpers.js';
import { Line } from 'react-chartjs-2';

const Main = styled.div`
    margin: auto;
    width: 95%;    
`;
const Container = styled.div`    
    width: 100%;
    height:100%;
    min-height: 100vh;
    transition: all ease 0.5s; 
    background-color: ${props => props.theme.body_color};     
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ChartWrapper = styled.div`
    max-width: 1500px;
    max-height: 900px;
    margin: auto;
    padding: 25px;
`;

function App() {

    let themeData = JSON.parse(localStorage.getItem('theme-data'));    
    if (!themeData) {
        themeData = {}
    }

    const [theme, setTheme] = useState(themeData);

    const [country, setCountry] = useState({ code: '🌎', label: 'Global'  });    
    const [timeLineData, setTimeLineData] = useState({});
    const [loading, setLoading] = useState(true);
    const [state, setstate] = useState({
        active: 0,
        cases: 0,
        deaths: 0,
        recovered: 0
    });

    const {active, cases, deaths, recovered} = state;

    const getGlobalData = async () => {
        let response = await fetchGlobalData();
        setLoading(false);
        setstate(response);        
    }

    const getGlobalDataTimeLine = async () => {
        let response = await fetchGlobalDataTimeline();
        setLoading(false);
        let data =  formatDataToChart(response);
        setTimeLineData(data);       
    }
    const getCountryData = async (countryCode) => {
        let response = await fetchCountryData(countryCode);
        setLoading(false);
        setstate(response);        
    }
    const getTimelineCountryData = async (countryCode) => {
        let response = await fetchCountryDataTimeLine(countryCode);          
        let data =  formatDataToChart(response);         
        setTimeLineData(data);            
    }

    
    useEffect(() => {
        if (isEmoji(country.code)){
            getGlobalData();
            getGlobalDataTimeLine();
        } else {
            getTimelineCountryData(country.code);
            getCountryData(country.code);
        }             
    }, [country]);
    
    let options = {
        scales: {
            yAxes: [{
                ticks:{     
                    callback: function(value, index, values) {                        
                        return new Intl.NumberFormat("es-ES").format(value);
                    }
                },
                
            }]
        }        
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header theme={theme} setTheme={setTheme}></Header> 
                <Main>
                    <Select setCountry={setCountry} country={country} setLoading={setLoading}></Select>
                    <CardWrapper>
                        <Card color={'#2eb2ff'} type={'Diagnosed'} numberCases={cases} loading={loading}></Card>   
                        <Card color={'#008037'} type={'Recovered'} numberCases={recovered} loading={loading}></Card>   
                        <Card color={'#FF6384'} type={'Deceased'} numberCases={deaths} loading={loading}></Card>   
                        <Card color={'#ff914d'} type={'Active'} numberCases={active} loading={loading}></Card>       
                    </CardWrapper> 
                    <ChartWrapper>
                        <Line 
                            width={100}
                            height={50}       
                            data={timeLineData} 
                            options={options}/>                         
                    </ChartWrapper>
                </Main>
                <Footer></Footer>
            </Container>
        </ThemeProvider>
    );
}

export default App;
