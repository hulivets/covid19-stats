import { get } from './sessionStorage';
import { COUNTRIES_KEY } from '../constants/keys';

export const getCountryOptions = () => {
    const countries = get(COUNTRIES_KEY);

    return countries
    .sort((a, b) => a.Country - b.Country)
    .map(obj => ({
        id    : obj['Country'].toLowerCase(),
        label : obj['Country'],
        value : obj['Slug']
    }));
};
