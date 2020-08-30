export const formatDate = (value) => {
    const date = new Date(value);

    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${d}/${m}/${y}`;
};
