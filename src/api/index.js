import environment from './../environment/environment.js';

export const fetchGlobalData =  async () => {
    let api = await fetch(environment.total.global);
    const { active, deaths, recovered, cases }  = await api.json();        
    return {active, deaths, recovered, cases};
}

export const fetchCountryData =  async (contryCode) => {
    let api = await fetch(`${environment.total.countries}/${contryCode}`);    
    return api.json();
}

export const fetchGlobalDataTimeline = async () => {
    let api = await fetch(`${environment.timeLine.global}`);
    let response  = await api.json(); 
    const {cases, deaths, recovered} = response;
    return  {cases, deaths, recovered}
}

export const fetchCountryDataTimeLine = async(contryCode) => {
    let api = await fetch(`${environment.timeLine.countries}/${contryCode}`);
    let response  = await api.json();    
    if (response.hasOwnProperty('timeline')) {
        const { cases, deaths, recovered} = response.timeline;    
        return { cases, deaths, recovered}; 
    } else {
        return { cases : 0, deaths : 0, recovered : 0}
    }   
}