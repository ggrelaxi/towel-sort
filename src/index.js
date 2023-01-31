// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, item, index) => {
        if (index === 0 || index % 2 === 0) {
            acc.push(...item);
        } else {
            acc.push(...item.reverse());
        }
        return acc;
    }, []);
};
