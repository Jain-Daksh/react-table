import React from 'react'
import carDetails from './car.json'
import Table from './tables'

function Cars() {
  return (
    <div>
      <Table cars={carDetails} />
    </div>
  )
}

export default Cars