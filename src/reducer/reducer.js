const initialState = { employees: [] };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            return { ...state, employees: [...state.employees, action.payload] };
        default:
            return state;
    }
};