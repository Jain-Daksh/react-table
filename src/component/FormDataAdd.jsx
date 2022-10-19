import React from 'react'
import { useState } from 'react'
import Table from './tables'
//import carDetails from './car.json'

function FormDataAdd(props) {
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
    const val = {
      name,
      yearOfOrigin,
      origin
    };
    props.function(val);

  }
  return (
    <div>
      <form >
        <input type="text" value={name} placeholder="Enter a name..." onChange={changeName} />
        <input type="date" value={yearOfOrigin} placeholder="Enter year Of Origin..." onChange={changeYearOfOrigin} />
        <input type="text" value={origin} placeholder="Enter origin..." onChange={changeOrigin} />
        <button onClick={submitData}> Click Me</button>
      </form>
      <Table cars={carDetails} />
    </div>
  )
}

export default FormDataAdd