export function statesModel(statesDataJS) {
    return statesDataJS.map((el) => {
        return {
            value: el.abbreviation,
            label: el.name,
        }
    })
}