import React from 'react'
import { useState } from 'react'


function AddData() {

  const [car, setCars] = useState(cars)
  return (
    <div>
      <h1>To Add data</h1>
      <h1>
        {
          cars.map((value) => (
            <h2>{value.Acceleration}</h2>
          ))
        }
      </h1>
    </div>

  )
}

export default AddData