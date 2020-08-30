export function save(key, data = []) {
    try {
        const serializedData = JSON.stringify(data);

        sessionStorage.setItem(key, serializedData);
    } catch (err) {
        console.log('Something went wrong');

        return null;
    }
}

export function get(key) {
    try {
        const data = sessionStorage.getItem(key);
        const parsedData = JSON.parse(data);

        return parsedData;
    } catch (err) {
        console.log('Something went wrong');

        return null;
    }
}

export default {
    save,
    get
};
