import Base from './Base';

class Countries extends Base {
    list() {
        return this.apiClient.get('countries');
    }
}

export default Countries;
