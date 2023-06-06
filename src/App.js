import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './App.css';

const App = () => {
  const data = React.useMemo(
    () => [
      {
        serialno:'1', name: 'Shree Bhola Yadav',fathername: 'Late Ram Bujhawan Yadav',address:'Gangaur,Madhiya',donation: '1,25,555/-'  
      },
      {
        serialno:'2', name: 'Ramnanadan Yadav', fathername: 'Late Mainjan Thakur',address: 'Gangaur, Kamtaul',donation: '57,049/-',
      },
      {
        serialno:'3', name: 'Dr Om Pandit', fathername: 'Shree Rameshwar pandit',address: 'Gangaur',donation: '55,555/-',
      },
      {
        serialno:'4', name: 'Shree Abhishek Kishor Yadav', fathername: 'Late Bajrangi Yadav',address: 'Gangaur,Pachgachhiya',donation: '51,055/-',
      },
      {
        serialno:'5', name:'Kumari Devi', fathername: 'Late Shiv Prasad',address: 'Gangaur',donation: '36,925/-',
      },
      {
        serialno:'6', name: 'Nayana Devi', fathername: 'Late Punyadev Mishra',address: 'Gangaur',donation: '35,551/-',
      },
      {
        serialno:'7', name: 'Shree LalKishor Ram', fathername: 'Shree Amiri Ram',address: 'Gangaur,Madiya',donation: '35,551/-',
      },
      {
        serialno:'8', name: 'Shree Rajdev Sah', fathername: 'Late Fakira Sah',address: 'Gangaur',donation: '25,555/-',
      },
      {
        serialno:'9', name: 'Shree Sanjay Yadav', fathername: 'Late Yogendra Yadav',address: 'Gangaur,Madiya',donation: '25,055/-',
      },
      {
        serialno:'10', name: 'Shree Ram Bahadur Mahto', fathername: 'Late Dilchan Mahto',address: 'Gangaur',donation: '25,000/-',
      },
      {
        serialno:'11', name: 'Shree Fudan Yadav', fathername: 'Late Matbar Yadav',address: 'Gangaur,Pachgachhiya',donation: '25,000/-',
      },
      {
        serialno:'12', name: 'Shree SuryaDev Mahto', fathername: 'Late Bhagvani Mahto',address: 'Gangaur,Gopalpur',donation: '21,000/-',
      },
      {
        serialno:'13', name: 'Shree Sitaram Yadav', fathername: 'Late Pachu Yadav',address: 'Gangaur,Pansalva',donation: '21,000/-',
      },
      {
        serialno:'14', name: 'Shree YugalKishor Yadav', fathername: 'Late Bindeshwar Yadav',address: 'Gangaur,Madiya',donation: '21,000/-',
      },
      {
        serialno:'15', name: 'Shree Ramprit Yadav', fathername: 'Shree Sonfi Yadav',address: 'Gangaur,Pansalva',donation: '21,000/-',
      },
      {
        serialno:'16', name: 'Shree Rambriksh Yadav', fathername: 'Late Shobhit Yadav',address: 'Gangaur,Kharhairi Tol',donation: '21,000/-',
      },
      {
        serialno:'17', name: 'Shree Binda Prasad', fathername: 'Late Jhauli Mahto',address: 'Gangaur,Kharhairi Tol',donation: '20,000/-',
      },
      {
        serialno:'18', name: 'Shree Ram Pravesh Ram', fathername: 'Shree Aanand Ram',address: 'Gangaur,Kharhairi Tol',donation: '17,075/-',
      },
      {
        serialno:'19', name: 'Shree Sukesh Ram', fathername: 'Shree Aanand Ram',address: 'Gangaur,Kharhairi Tol',donation: '16,000/-',
      },
      {
        serialno:'20', name: 'Shree Sudhir Kumar', fathername: 'Late Radheshyam Mahto',address: 'Gangaur,Gopalpur',donation: '15,555/-',
      },
      {
        serialno:'21', name: 'shree Ganesh Yadav', fathername: 'Shree Rajeshwar Yadav',address: 'Gangaur,Pachgachhiya',donation: '15,551/-',
      },
      {
        serialno:'22', name: 'Shree Lakshman Yadav', fathername: 'Late Ramsudist Yadav',address: 'Gangaur,Pansalva',donation: '15,151/-',
      },
      {
        serialno:'23', name: 'Shree Surendra Prasad', fathername: 'Late Viptu Mahto',address: 'Gangaur',donation: '15,051/-',
      },
      {
        serialno:'24', name: 'Shree RamPrabod Sahu', fathername: 'Shree Bhadai Sahu',address: 'Gangaur',donation: '15,051,/-',
      },
      {
        serialno:'25', name: 'Shree Govind Kumar', fathername: 'Shree Tholai Yadav',address: 'Gangaur',donation: '15,051/-',
      },
      {
        serialno:'26', name: 'Shree RamDyal Mishra', fathername: 'Late Prau Mishra',address: 'Gangaur',donation: '15,051/-',
      },
      {
        serialno:'27', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'28', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'29', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'30', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'31', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'32', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'33', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'34', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'35', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'36', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'37', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'38', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'39', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'40', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'41', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'42', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'43', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'44', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'45', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'46', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'47', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'48', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'49', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'50', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'51', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'52', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'53', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'54', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'55', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'56', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'57', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'58', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'59', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'60', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'61', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'62', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'63', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'64', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'65', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'66', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'67', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'68', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'69', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'70', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'71', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'72', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'73', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'74', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'75', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'76', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'77', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'78', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'79', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'80', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'81', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'82', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'83', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'84', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'85', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'86', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'87', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'88', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'89', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'90', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'91', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'92', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'93', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'94', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'95', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'96', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'97', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'98', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'99', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'100', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'101', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'102', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'103', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'104', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'105', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'106', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'107', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'108', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'109', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'110', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'111', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'112', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'113', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'114', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'115', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'116', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'117', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'118', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'119', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'120', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'121', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'122', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'123', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'124', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'125', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'126', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'127', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'128', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'129', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'130', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'131', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'132', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'133', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'134', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'135', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'136', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'137', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'138', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'139', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'140', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'141', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'142', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'143', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'144', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'145', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'146', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'147', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'148', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'149', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'150', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'151', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'152', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'153', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'154', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'155', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'156', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'157', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'158', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'159', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'160', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'161', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'162', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'163', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'164', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'165', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'166', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'167', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'168', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'169', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'170', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'171', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'172', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'173', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'174', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'175', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'175', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'176', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'177', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'178', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'179', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'180', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'181', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'182', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'183', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'184', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'185', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'186', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'187', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'188', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'189', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'190', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'191', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'192', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'193', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'194', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'195', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'196', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'197', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'198', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'199', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'200', name: '', fathername: '',address: '',donation: '',
      },
      {
        serialno:'2', name: '', fathername: '',address: '',donation: '',
      },

    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header:'Serial No.',
        accessor:'serialno'
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: "Father's Name/Husband's Name",
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
    <div> 
    या देवी सर्वभूतेषु विष्णुमायेति शब्दिता |
    नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥
    </div>
    <div>No donation is more and less
    </div>
    <div>gupt daan maha daan</div>
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
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
