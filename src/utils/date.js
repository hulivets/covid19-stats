function format(value) {
    if (value < 10) return `0${value}`;

    return value;
}

export const formatDate = (value) => {
    const date = new Date(value);

    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    return `${format(d)}/${format(m)}/${y}`;
};
