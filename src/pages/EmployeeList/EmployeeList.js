import React, { useMemo } from 'react';
// import "./styles.css";
import { Table } from '../../components/Table/Table.js';
// import makeData from "./makeData";
import employeeList from '../../data/employeeList.json';
import { useSelector } from "react-redux";

export default function EmployeeList() {

    const employee = useSelector( state => state);
    console.log("redux", employee)



    const employeeFormat = (employeeList) => {
        return employeeList.map((el) => {
            return {
                col1: el.firstName,
                col2: el.lastName,
                col3: el.dob,
                col4: el.department,
                col5: el.dob,
                col6: el.address,
                col7: 'Alabama',
                col8: 'AL',
                col9: el.id,
            };
        });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'col1', // accessor is the "key" in the data
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

    const data = React.useMemo(
        () => employeeFormat(employeeList),
        []
    );

    return <Table columns={columns} data={data} />
}