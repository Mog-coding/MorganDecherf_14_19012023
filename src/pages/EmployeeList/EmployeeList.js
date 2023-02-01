import React from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

export default function EmployeeList() {
    const employeeData = useSelector((state) => state.employeeData);
    console.log(employeeData);

    const data = React.useMemo(        //1 data = row (lignes)
        () => [
            {
                col1: 'Gerard',
                col2: 'Un',
                col3: '06/12/13',
                col4: 'marketing',
                col5: '06/12/13',
                col6: 'rue delarue',
                col7: 'ville',
                col8: 'AL',
                col9: '06',
            },
            {
                col1: 'José',
                col2: 'Deux',
                col3: '06/12/13',
                col4: 'marketing',
                col5: '06/12/13',
                col6: 'rue delarue',
                col7: 'ville',
                col8: 'AL',
                col9: '06',
            },
            {
                col1: 'Josianne',
                col2: 'Trois',
                col3: '06/12/13',
                col4: 'marketing',
                col5: '06/12/13',
                col6: 'rue delarue',
                col7: 'ville',
                col8: 'AL',
                col9: '06',
            },
        ],
        []
    );

    const columns = React.useMemo(        //2 data colonnes
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

    const {        //3 useTable( )
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (        //4 return html
        <>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>

                <table
                    {...getTableProps()}
                    style={{ borderCollapse: 'collapse' }}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 1px black',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    borderBottom:
                                                        'solid 1px gray',
                                                    background: 'lightgrey',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
