export const getCountryOptions = (data) => {
    return data
    .sort((a, b) => a['Country'] - b['Country'])
    .map(obj => ({
        id    : obj['Country'].toLowerCase(),
        label : obj['Country'],
        value : obj['Slug']
    }));
};
