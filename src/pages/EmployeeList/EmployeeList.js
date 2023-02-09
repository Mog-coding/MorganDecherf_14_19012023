import React from 'react';
import "./EmployeeList.css";
import { Table } from '../../components/Table/Table.js';
import { useSelector } from "react-redux";
import { dateFormat } from '../../utils/dateFormat';

export default function EmployeeList() {

    const employeesList = useSelector(state => state.employees);

    const reduxFormat = (employeeList) => {
        console.log("redux employeeList: ", employeeList)
        return employeeList.map((el) => {
            return {
                col1: el.firstName,
                col2: el.lastName,
                col3: dateFormat(el.startDate),
                col4: el.selectedDepartment.value,
                col5: dateFormat(el.birthDate),
                col6: el.street,
                col7: el.city,
                col8: el.selectedState.value,
                col9: el.zipCode,
            };
        });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'col1',
            },
            {
                Header: 'Last Name',
                accessor: 'col2',
            },
            {
                Header: 'Start Date',
                accessor: 'col3',
            },
            {
                Header: 'Department',
                accessor: 'col4',
            },
            {
                Header: 'Date of Birth',
                accessor: 'col5',
            },
            {
                Header: 'Street',
                accessor: 'col6',
            },
            {
                Header: 'City',
                accessor: 'col7',
            },
            {
                Header: 'State',
                accessor: 'col8',
            },
            {
                Header: 'Zip Code',
                accessor: 'col9',
            },
        ],
        []
    );

    //data -> employeeMockModel(employeeListMock) OU employeesList
    const data = React.useMemo(
        () => reduxFormat(employeesList),
        []
    );

    return (
        <main className="employeeList">
            <h1>Employees list</h1>
            <button></button>
            <Table columns={columns} data={data} />
        </main>
    )
}