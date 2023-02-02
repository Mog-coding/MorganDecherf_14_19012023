import React from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import './Table.css';

export function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter
    );

    const handleFilterInputChange = (e) => {
        const { value } = e.currentTarget;
        setGlobalFilter(value);
    };

    return (
        <div className="tableCont">
            <div className="tableCont__inputCont">
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    className="tableCont__input"
                    placeholder="Filter"
                    onChange={handleFilterInputChange}
                />
            </div>
            <table className="tableCont__table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
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
    );
}