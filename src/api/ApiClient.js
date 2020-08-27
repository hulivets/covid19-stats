import queryString from 'query-string';
export default class ApiClient {
    constructor({ url } = {}) {
        this.url = url;
    }

    async get(url, params) {
        const repeatAmount = 2;

        return this.requestSeveralTimesIfError({
            url,
            params,
            method: 'GET'
        }, repeatAmount);
    }

    async request({ url, method, params = {}, body = {} }) {
        const query = Object.keys(params).length
            ? `?${queryString.stringify(params)}`
            : '';

        const bodyData = method !== 'GET'
            ? JSON.stringify(body)
            : undefined;

        try {
            const response = await fetch(
                `${this.url}/${url}/${query}`,
                {
                    method,
                    headers: {
                        'Cache-Control'               : 'no-cache',
                        pragma                        : 'no-cache',
                        'Content-Type'                : 'application/json',
                        'Access-Control-Allow-Origin' : '*'
                    },
                    withCredentials : true,
                    crossDomain     : false,
                    body            : bodyData
                }
            );

            const json = await response.json();

            if (response.status > 201) {
                throw json;
            }

            return json;
        } catch (error) {
            console.warn(`Bad api call: ${error}`);
            throw error;
        }
    }

    async requestSeveralTimesIfError(requestParams, repeatAmount = 2) {
        let response = null;

        let error = null;

        let iteration = 0;

        while (iteration < repeatAmount) {
            try {
                response = await this.request(requestParams);
                error = null;
                iteration = repeatAmount;
            } catch (err) {
                console.error('Bad api call', error);

                error = err || 'some error';
            }
            iteration += 1;
        }

        if (error) throw new Error(error);

        return response;
    }
}
