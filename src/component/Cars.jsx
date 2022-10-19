// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import AddAndDelete from './AddAndDelete'
// import carDetails from './car.json'
// import Table from './tables'

// function Cars() {
//  //useEffect()
//   return (
//     <div>
//      <div className='text-center'>
//      <AddAndDelete />
//      </div>
//       <Table cars={carDetails} />
//     </div>
//   )
// }

// export default Cars


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddAndDelete from './AddAndDelete'
import carDetails from './car.json'
import Table from './tables'

function Cars() {
  //const [cars , setCars] = useState(carDetails)

 //useEffect()
// useEffect(() => {
// }, [])
  return (
    <div>
     <div className='text-center'>
     <AddAndDelete />
     </div>
      {/* <Table cars={carDetails} /> */}
    </div>
  )
}

export default Cars