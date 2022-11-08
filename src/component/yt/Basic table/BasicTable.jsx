import React from 'react'
import { useMemo } from 'react'
import { useTable } from 'react-table'
import Mock_data from '../MOCK_DATA.json'
import { Columns } from './column'
const BasicTable = () => {

  const columns = useMemo(() => Columns, [])
  const data = useMemo(() => Mock_data, [])

 const tableinstance =  useTable({
    columns: columns,
    data: data
  })

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableinstance 
  return (
    <div>
      <table {...getTableProps()}>
        <thead >
          {
            headerGroups.map((headerGroups) => (
              <tr {...headerGroups}>

              </tr>
            ))
          }
          <tr></tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BasicTable