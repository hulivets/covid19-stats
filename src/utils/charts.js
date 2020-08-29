// TotalConfirmed, TotalRecovered, TotalDeaths

const CASES = {
    confirmed : 'NewConfirmed',
    recovered : 'NewRecovered',
    deaths    : 'NewDeaths'
};

export const getWorldChartData = (data = [], currentCase) => {
    const result = data.map(obj => ({
        name          : currentCase,
        [currentCase] : obj[CASES[currentCase]],

    }));

    return result;
};
