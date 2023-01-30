export const createEmployeeAction = (employeeData) => {
    return { type: 'CREATE_EMPLOYEE', employeeData: employeeData };
}