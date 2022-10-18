// import React from 'react'
// import { useState } from 'react'



// function FormDataAdd() {

//   // const [name, setName] = useState('')
//   // const [year, setYear] = useState('')
//   // const [origin, setOrigin] = useState('')

//   // const changeName = (e) => {
//   //   setName(e.target.value);
//   // }
//   // const changeYear = (e) => {
//   //   setYear(e.target.value);
//   // }
//   // const changeOrigin = (e) => {
//   //   setOrigin(e.target.value);
//   // }

//   const [formInputData, setformInputData] =  useState ({
//     name:'',
//     year:'',
//     origin:''
//   })
//   const handleChange=(e)=>{  
//     const newInput = (data)=>({...data, [e.target.name]:e.target.value})
//    setformInputData(newInput)
// }
//   return (
//     <div>
//       <form>
//         <input type="text" value={name} placeholder="Enter a name..." onChange={handleChange} />
//         <input type="date" value={year} placeholder="Enter a year..." onChange={handleChange} />
//         <input type="text" value={origin} placeholder="Enter origin..." onChange={handleChange} />
//       </form>
//     </div>
//   )
// }

// export default FormDataAdd


import React from 'react'
import { useState } from 'react'

function FormDataAdd() {
  const [name, setName] = useState('')
  const [yearOfOrigin, setYearOfOrigin] = useState('')
  const [origin, setOrigin] = useState('')
  
  const changeName = (e) => {
    setName(e.target.value);
    console.log(setName)
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
  return (
    <div>
      <form >
        <input type="text" value={name} placeholder="Enter a name..." onChange={changeName} />
        <input type="date" value={yearOfOrigin} placeholder="Enter year Of Origin..." onChange={changeYearOfOrigin} />
        <input type="text" value={origin} placeholder="Enter origin..." onChange={changeOrigin} />
        <button onClick={submitData}> Click Me</button>
      </form>
    </div>
  )
}

export default FormDataAdd