import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import './Table.css';

export function Table({ columns, data }) {
    const props = useTable(
        {
          columns,
          data
        },
        useGlobalFilter,
        usePagination
      );

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter }
      } = props;

    const handleFilterInputChange = (e) => {
        const { value } = e.currentTarget;
        setGlobalFilter(value);
    };

    return (
        <>
            <div className="tableCont">
                <div className="tableCont__inputCont">
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>

                    <div>
                        <label htmlFor="search">Search</label>
                        <input
                            id="search"
                            className="tableCont__input"
                            placeholder="Filter"
                            onChange={handleFilterInputChange}
                        />
                    </div>
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
                        {page.map((row, i) => {
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

                <div className="tableCont__pagination">
                    <p>
                        Showing{' '}
                        {page.length > 0
                            ? 1 +
                              pageIndex * pageSize +
                              ' to ' +
                              (page.length + pageIndex * pageSize) +
                              ' of ' +
                              rows.length
                            : ' 0 '}{' '}
                        entries
                    </p>

                    <p>
                        <button
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                        >
                            {'<<'}
                        </button>{' '}
                        <button
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                        >
                            {'<'}
                        </button>{' '}
                        <span>
                            go to page:{' '}
                            <input
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={(e) => {
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0;
                                    gotoPage(page);
                                }}
                                style={{ width: '50px' }}
                            />
                        </span>
                        <button
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                        >
                            {'>'}
                        </button>{' '}
                        <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                        >
                            {'>>'}
                        </button>{' '}
                        <span>
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}