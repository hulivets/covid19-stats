import Base from './Base';

class World extends Base {
    list(params) {
        return this.apiClient.get('world', { ...params });
    }
}

export default World;
