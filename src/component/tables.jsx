import React from 'react'

function Table(props) {
  console.log(props)
  return (
    <div>

      <table>
        <thead>
          <tr>
            <td>
             Car Name
            </td>
            <td>
             yearOfOrigin
            </td>
            <td>
             origin
            </td>
          </tr>
        </thead>
        <tbody>
          {props.cars.map((item) => (
            <tr>
              <td>
                {item.carName}
              </td>
              <td>
                {item.yearOfOrigin}
              </td>
              <td>
                {item.origin}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table