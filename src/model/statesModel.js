export class StatesModel {
    constructor(dataJS) {
        if (dataJS) {
            this.statesData = dataJS.map((el) => {
                return {
                    value: el.name,
                    label: el.name,
                }
            })
        }
    }
}