const environment = {
    production: false,
    environment: 'LOCAL',
    total : {
        countries: 'https://disease.sh/v2/countries',
        global: 'https://disease.sh/v2/all',
    },
    timeLine : {
        global: 'https://disease.sh/v2/historical/all?lastdays=30',
        countries : 'https://disease.sh/v2/historical'
    }    
};

export default environment;