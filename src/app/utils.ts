export const dateDiffInMonth = (d1: Date, d2: Date): number => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth() + 1;
    return months <= 0 ? 0 : months;
};


export const getDate = (date: Date): string => {
    const now = new Date();
    if (date.getUTCFullYear() === now.getUTCFullYear() && date.getUTCMonth() === now.getUTCMonth()) {
        return 'Present';
    }
    return date.toLocaleString(
        'default',
        {month: 'long'}
    ) + '/' + date.getUTCFullYear();
};