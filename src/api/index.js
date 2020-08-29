import ApiClient from './ApiClient';
import CountriesAPI from './Countries';
import WorldAPI from './World';

export default function({ url } = {}) {
    const api = new ApiClient({
        url
    });

    return {
        apiClient : api,
        countrues : new CountriesAPI({ apiClient: api}),
        world     : new WorldAPI({ apiClient: api })
    };
}
