// TotalConfirmed, TotalRecovered, TotalDeaths

const CASES = {
    confirmed : 'NewConfirmed',
    recovered : 'NewRecovered',
    deaths    : 'NewDeaths'
};

const BY_COUNTRY_CASES = {
    confirmed : 'Confirmed',
    recovered : 'Recovered',
    deaths    : 'Deaths'
}

export const getWorldChartData = (data = [], currentCase) => {
    const result = data.map(obj => ({
        name          : currentCase,
        [currentCase] : obj[CASES[currentCase]],

    }));

    return result;
};

export const getChartDataByCountry = (data = [], currentCase) => {
    return data.map(obj => ({
        date  : new Date(obj['Date']).toLocaleDateString(),
        [currentCase] : obj[BY_COUNTRY_CASES[currentCase]]
    }))
};
