import React from 'react';
import './EmployeeList.css';
import { Table } from '../../components/Table/Table.js';
import { useSelector } from 'react-redux';
import { dateFormat } from '../../utils/dateFormat';

/**
 * @description Page that display employees in table
 */
export default function EmployeeList() {
    const employeesList = useSelector((state) => state.employees);

    const tableDataFormat = (employeeList) => {
        return employeeList.map((el) => {
            return {
                ...el,
                startDate: el.startDate ? dateFormat(el.startDate) : '',
                selectedDepartment: el.selectedDepartment ? el.selectedDepartment.value : '',
                birthDate: el.birthDate ? dateFormat(el.birthDate) : '',
                selectedState: el.selectedState ? el.selectedState.value : '',
            };
        });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Start Date',
                accessor: 'startDate',
            },
            {
                Header: 'Department',
                accessor: 'selectedDepartment',
            },
            {
                Header: 'Date of Birth',
                accessor: 'birthDate',
            },
            {
                Header: 'Street',
                accessor: 'street',
            },
            {
                Header: 'City',
                accessor: 'city',
            },
            {
                Header: 'State',
                accessor: 'selectedState',
            },
            {
                Header: 'Zip Code',
                accessor: 'zipCode',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => tableDataFormat(employeesList),
        [employeesList]
    );

    return (
        <main className="employeeList">
            <h1>Employees list</h1>
            <Table columns={columns} data={data} />
        </main>
    );
}
