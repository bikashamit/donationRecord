import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './App.css';

const App = () => {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: 'John Doe',
        fathername: 'Michael Doe',
        address: '123 Main St, City',
        donation: '$100',
      },
      {
        id: 2,
        name: 'Jane Smith',
        fathername: 'David Smith',
        address: '456 Park Ave, Town',
        donation: '$50',
      },
      // Add more data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'No.',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Father Name',
        accessor: 'fathername',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Donation',
        accessor: 'donation',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <div className="App">
      <div className="filter-container">
        <input
          className="filter-input"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="mobile-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
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
              <tr
                {...row.getRowProps()}
                style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f0f0f0' }}
              >
                {row.cells.map((cell, j) => (
                  <td
                    {...cell.getCellProps()}
                    className={j === 0 ? 'serial-no' : ''}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
