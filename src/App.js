import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './App.css';

const App = () => {
  const data = React.useMemo(
    () => [
      {
        name: 'John Doe',
        fathername: 'Michael Doe',
        address: '123 Main St, City',
        donation: '$100',
      },
      {
        name: 'Jane Smith',
        fathername: 'David Smith',
        address: '456 Park Ave, Town',
        donation: '$50',
      },
      // Add more data as needed
      { name: 'Shree Bhola Yadav',fathername: 'Late Rambujhawan yadav',address: 'Madhiya, Gangaur',donation: '1,25,555/-'},
      { name: 'Shree Ramnandan Thakur',fathername: 'Late Maijan Thakur',address: 'Kamtaul, Gangaur',donation: '57,049/-'},
      { name: 'Shree Dr Om Pandit',fathername: 'Shree Rameshwar pandit',address: 'Gangaur',donation: '55,555/-'},
      { name: 'Shree Abhishek Kishore Yadav',fathername: 'Late Bajrangi Yadav',address: 'Pachgachhiya, Gangaur',donation: '51,055'},
      { name: 'Moshmat Kumari Devi',fathername: 'Late shiv Prasad',address: 'Gangaur',donation: '36,925'},
      { name: 'Moshmat Nayna Devi',fathername: 'Late Punyadeo Mishra',address: 'Ganagur',donation: '35,551/-'},
      { name: 'Shree Lal Kishore Ram',fathername: 'Shree Amiri Ram',address: 'Madhiya, Ganagur',donation: '35,551/-'},
      { name: '',fathername: '',address: '',donation: '',},
      { name: '',fathername: '',address: '',donation: '',},
      { name: '',fathername: '',address: '',donation: '',},
    ],
    
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Serial No.',
        id: 'serialNo',
        Cell: ({ row }) => {
          return row.index + 1;
        },
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
      <div className="table-container">
        <table {...getTableProps()} className="mobile-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
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
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={index % 2 === 0 ? 'table-row-white' : 'table-row-gray'}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
