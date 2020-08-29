import Base from './Base';

class Live extends Base {
    list(data) {
        const { country, dateFrom } = data;

        return this.apiClient.get(`live/country/${country}/status/confirmed/date/${dateFrom}`);
    }
}

export default Live;
