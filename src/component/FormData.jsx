import React from 'react'
import { useState } from 'react'
import carDetails from './car.json'

function FormData() {
  const [cars,setCars]= useState(carDetails)

  const [addCar , setAddCar] = useState({
    name: '',
    year: '',
    origin: ''
  })

  const handleaddform = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldvalue = e.target.value;

    const newformdata = {...addCar}
    newformdata[fieldName] = fieldvalue;

    setAddCar(newformdata)
  }

  const submitfor = (e) => {
    e.preventDefault();

    const newCardetails = {
      
      name: addCar.name,
    year: addCar.year,
    origin: addCar.origin
    }

    const newCar = [...cars , newCardetails]
    setCars(newCar)
  }
  return (
    <div>
      <form onSubmit={submitfor}>
        <input type="text"  name="name" placeholder='car name' onChange={handleaddform}/>
        <input type="text"  name="year" placeholder='car name' onChange={handleaddform}/>
        <input type="text"  name="origin" placeholder='car name' onChange={handleaddform}/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default FormData






// import React, {useState} from 'react';
// import { useEffect } from 'react';
// import carDetails from './car.json'

// function AddAndDelete(props) {
//     const [cars , setCars] = useState(carDetails)
    
//     const [carNewData , setCarNewData] = useState('')
   
//     const onDataAdd = (data) => {
//       const totalCar = cars.length
//       console.log("totaluser "+ totalCar)
//       data.id = totalCar + 1
//       const updateData = [...cars]
//       console.log(updateData)
//       updateData.push(data)
//     //    const data = this.props.cars.push()
//     //    console.log("props" + data)
//       setCars(updateData)
//     }
// //   const cars = this.props.cars.push()
    

//     const inputsHandler = (e) =>{
//         const newInput = (carDetails)=>({...carDetails, [e.target.name]:e.target.value})
//         setCarNewData(newInput)
//     //console.log("newInput " + newInput)
//     }

   

//     useEffect((e) => {
//         const cars = [...carDetails]
//         cars.push(carNewData)
//         setCars(cars)
//         console.log(cars)

//     }, [props])
//     const onSave = (e) => {
//        e.preventDefault()
//        console.log("new car data" , carNewData)
//     //    const newData = ([...cars, carNewData])
//     //    setCars(newData)
//        //console.log(newData)

//     }
//     return (
//         <div>
//         <form onSubmit={onSave}>
//         <input 
//             type="text" 
//             name="name" 
//             onChange={inputsHandler} 
//             placeholder="car Name " 
//             value={carNewData.name}/>

//             <br/>

//             <input 
//             type="date" 
//             name="year" 
//             onChange={inputsHandler} 
//             placeholder="year Of Origin" 
//             value={carNewData.year}/>

//             <br/>

//             <input 
//             type="text" 
//             name="origin" 
//             onChange={inputsHandler} 
//             placeholder="origin" 
//             value={carNewData.origin}/>

//             <br/>

//             <button onClick={onDataAdd}>Submit Now</button>
//         </form>
//         </div>
//     )
// }

// export default AddAndDelete