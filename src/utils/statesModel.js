/**
 * @description model states data for select library  
 * @param {Array} statesDataJS 
 * @returns {Array}
 */
export function statesModel(statesDataJS) {
    return statesDataJS.map((el) => {
        return {
            value: el.abbreviation,
            label: el.name,
        }
    })
}