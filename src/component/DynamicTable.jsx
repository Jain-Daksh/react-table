/*
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DynamicTable() {
  const [tableData , setTableData] = useState([])
console.log(tableData)
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(res => setTableData(res.data)).catch(err => console.log(err) )
  },[])

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <div>
      <h1>Dynamic Table</h1>
    </div>
  )
}

export default DynamicTable

*/



import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DynamicTable() {
  const [tableData, setTableData] = useState([])
  console.log(tableData)

  const userData = () => {
    axios('https://jsonplaceholder.typicode.com/users').then(res => setTableData(res.data)).catch(err => console.log(err))
  }
  useEffect(() => {
    userData()
  }, [])

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]
  //const TableHeadItem = ({ item }) => <th>{item.heading}</th>

  return (
    <div>
      <h1>Dynamic Table</h1>
      <table>
        <thead>
          <tr>
            {
              column.map((item) => (
                <th>{item.heading}</th>
              ))
            }
          </tr>

        </thead>
        <tbody>
          {
            tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable