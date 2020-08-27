export default function({ url } = {}) {
    const api = new ApiClient({
        url
    });

    return {
        apiClient : api
    };
}