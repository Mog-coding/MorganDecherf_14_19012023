const initialState = {
    firstName: "validax"
}

export const adressReducer = ( state = initialState, action) => {
    switch(action.type){
        case "TEST":
            return { ...state, firstName: action.amount}
        default:
            return state
    }
}