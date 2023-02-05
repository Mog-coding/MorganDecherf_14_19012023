const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            return [ ...state, action.payload ];
        default:
            return state;
    }
};