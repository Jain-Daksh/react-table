import React from 'react'
import { useState } from 'react'

const carsData = [
  {
    "id": 1,
    "carName": "chevrolet chevelle malibu",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Acceleration": 12,
    "yearOfOrigin": "1970-01-01",
    "origin": "USA"
  },
  {
    "id": 2,
    "carName": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "yearOfOrigin": "1970-01-01",
    "origin": "USA"
  },
  {
    "id": 3,
    "carName": "plymouth satellite",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 318,
    "Horsepower": 150,
    "Weight_in_lbs": 3436,
    "Acceleration": 11,
    "yearOfOrigin": "1970-01-01",
    "origin": "USA"
  },
  {
    "id": 4,
    "carName": "amc rebel sst",
    "Miles_per_Gallon": 16,
    "Cylinders": 8,
    "Displacement": 304,
    "Horsepower": 150,
    "Weight_in_lbs": 3433,
    "Acceleration": 12,
    "yearOfOrigin": "1970-01-01",
    "origin": "USA"
  }
]

// const headings = [
//   { carName: 'carName', value: 'carName' },
//   { carName: 'yearOfOrigin', value: 'yearOfOrigin' },
//   { carName: 'origin', value: 'origin' },
// ]
const headings = ['carName', 'yearOfOrigin', 'origin']






function Table() {

  const [cars, setCars] = useState(carsData)
 
  const [carName , setCarName] = useState('')
  const [yearOfOrigin , setYearOfOrigin] = useState('')
  const [origin , setOrigin] = useState('')
  const changeName = (e) => {
    setCarName(e.target.value);
  }
  const changeYearOfOrigin = (e) => {
    setYearOfOrigin(e.target.value);
  }
  const changeOrigin = (e) => {
    setOrigin(e.target.value);
  }
  
  const submitData = (e) => {
    e.preventDefault()
  }
  console.log("cars" + cars)
  return (
    <div>

<div>
      <form >
        <input type="text" value={carName} placeholder="Enter a name..." onChange={changeName} />
        <input type="date" value={yearOfOrigin} placeholder="Enter year Of Origin..." onChange={changeYearOfOrigin} />
        <input type="text" value={origin} placeholder="Enter origin..." onChange={changeOrigin} />
        <button onClick={submitData}> Click Me</button>
      </form>
    </div>


      <table>
        <thead>
          <tr>
            {/* {
              headings.map((item) => (
                <th>{item.carName}</th>
              ))
            } */}
            {
              headings.map((item) => (
                <th>{item}</th>
              ))
            } 
            
          </tr>
        </thead>
        <tbody>
         {
          cars.map((item) => (
            <tr key={item.id}>
              <td>{item.carName}</td>
              <td>{item.yearOfOrigin}</td>
              <td>{item.origin}</td>
            </tr>
          ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default Table