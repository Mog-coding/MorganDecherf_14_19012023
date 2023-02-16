/**
 * @description model employees dates for table library
 * @param {Object} date
 * @returns {Object}
 */
export const dateFormat = (date) => {
    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
