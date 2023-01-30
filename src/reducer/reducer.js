const initialState = {
    employeeData: {}
}

export const reducer = ( state = initialState, action) => {
    switch(action.type){
        case "CREATE_EMPLOYEE":
            return { ...state, employeeData: action.employeeData}
        default:
            return state
    }
}