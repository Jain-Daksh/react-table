// // import React, {useState} from 'react';
// // import carDetails from './car.json'

// // function AddAndDelete() {

// //     const [carNewData , setCarNewData] = useState(carDetails)

// //     const inputsHandler = (e) =>{
// //         const newInput = (carDetails)=>({...carDetails, [e.target.name]:e.target.value})
// //         setCarNewData(newInput)
// //     console.log("newInput " + newInput)
// //     }

// //     const submitButton = (e) => {
// //        e.preventDefault()
// //        const newData = (data)=>([...data, carNewData])
// //        console.log(newData)

// //     }
// //     return (
// //         <div>
// //         <form onSubmit={submitButton}>
// //         <input 
// //             type="text" 
// //             name="carName" 
// //             onChange={inputsHandler} 
// //             placeholder="car Name " 
// //             value={carNewData.carName}/>

// //             <br/>

// //             <input 
// //             type="date" 
// //             name="yearOfOrigin" 
// //             onChange={inputsHandler} 
// //             placeholder="year Of Origin" 
// //             value={carNewData.yearOfOrigin}/>

// //             <br/>

// //             <input 
// //             type="text" 
// //             name="origin" 
// //             onChange={inputsHandler} 
// //             placeholder="origin" 
// //             value={carNewData.origin}/>

// //             <br/>

// //             <button>Submit Now</button>
// //         </form>
// //         </div>
// //     )
// // }

// // export default AddAndDelete



// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import carDetails from './car.json'
// import Table from './tables'

// function AddAndDelete(props) {
//     const [cars, setCars] = useState(carDetails)

//     const [carNewData, setCarNewData] = useState('')

//     // const onDataAdd = (data) => {
//     //   const totalCar = cars.length
//     //   console.log("totaluser "+ totalCar)
//     //   data.id = totalCar + 1
//     //   const updateData = [...cars]
//     //   console.log(updateData)
//     //   updateData.push(data)
//     //    const data = this.props.cars.push()
//     //    console.log("props" + data)
//     //   setCars(updateData)
//     // }
//     //   const cars = this.props.cars.push()


//     const inputsHandler = (e) => {
//         console.log(carNewData.name)
//         const newInput = { name: carNewData.name, year: carNewData.year, origin: carNewData.origin }

//         setCarNewData(newInput)
//         const cars = [...carDetails, carNewData]
//         console.log(cars)
//         setCars(cars)
//         //console.log("newInput " + newInput)
//     }

//     // useEffect((e) => {
//     //     const cars = [...carDetails, carNewData]
//     //     //cars.push(carNewData)
//     //     setCars(cars)
//     //     console.log(cars)

//     // }, [props.carDetails])


//     // useEffect((e) => {
//     //     const cars = [...carDetails]
//     //     cars.push(carNewData)
//     //     setCars(cars)
//     //     console.log(cars)

//     // }, [props])
//     // const onSave = (e) => {
//     //     e.preventDefault()
//     //     console.log("new car data", carNewData)
//     //     const newData = ([...cars, carNewData])
//     //     setCars(newData)
//     //     console.log(newData)

//     // }
//     const onSave = (e) => {
//         e.preventDefault()
//         console.log("new car data", carNewData)
//         const newData = ([...cars, carNewData])
//         setCars(newData)
//         console.log(newData)
//         //    const newcars =  carNewData.push({
//         //         name: carNewData.name,
//         //        // year:e.target.value,
//         //        // origin:e.target.value
//         //       });
//         //       setCars(newcars)
//         //       console.log(newcars)
//     }



//     return (
//         <div>
//             {/* <form onSubmit={onSave}>
//                 <input
//                     type="text"
//                     name="name"
//                     onChange={inputsHandler}
//                     placeholder="car Name "
//                     value={carNewData.name} />
//                 <br />
//                 <input
//                     type="date"
//                     name="year"
//                     onChange={inputsHandler}
//                     placeholder="year Of Origin"
//                     value={carNewData.year} />
//                 <br />
//                 <input
//                     type="text"
//                     name="origin"
//                     onChange={inputsHandler}
//                     placeholder="origin"
//                     value={carNewData.origin} />
//                 <br />
//                 <button >Submit Now</button>
//             </form> */}

//             <form onSubmit={onSave}>
//                 <input type="text" name='name' onChange={inputsHandler} placeholder="car name" value={carNewData.name} />
//                 <button >Submit Now</button>
//             </form>

//             <Table cars={carDetails} />
//         </div>
//     )
// }

// export default AddAndDelete

//<!--------------------------working code-----------------------------!>
// import React, {useState} from 'react';
// import Users from './record.json'
// import Table from './tables';

// function AddAndDelete(props) {
//     const [newRecord , setRecords] = useState({});
//     const [existingRecords , setExistingRecords] = useState(Users);

//     const handleChange = (e) => {

//       const name = e.target.name;
//       const value = e.target.value;
//       setRecords(values => ({...values, [name]: value}))
//     }
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       setRecords(newRecord)
//       const data = [...existingRecords, newRecord];
//       setExistingRecords(data)
//       setRecords({})
//     }
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             value={ newRecord.fullName || "" }
//             onChange={handleChange}
//             placeholder="newRecord fullName "
//           />
//           <br/>
//           <input
//             type="text"
//             name="age"
//             value={ newRecord.age || "" }
//             onChange={handleChange}
//             placeholder="age"
//           />
//           <br/>
//           <input
//             type="text"
//             name="city"
//             value={ newRecord.city || "" }
//             onChange={handleChange}
//             placeholder="origin"
//           />
//           <br/>
//           <input type="submit" value="Submit" />
//         </form>
//         <Table users={existingRecords} />
//       </div>
//     )
// }
// export default AddAndDelete

//<!---------------working---------------!>



// import React, { useState } from 'react';
// import Users from './car.json'
// import Table from './tables';

// function AddAndDelete(props) {
//   const [newRecord, setRecords] = useState({});
//   const [carsRecord, setCarsRecord] = useState(Users);



//   const handleChange = (e) => {

//     const name = e.target.name;
//     const value = e.target.value;
//     setRecords(values => ({ ...values, [name]: value }))
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setRecords(newRecord)
//     const data = [...carsRecord, newRecord];
//     setCarsRecord(data)
//     setRecords({})
//   }


//   const deleteRow = (index) => {
//     const length = newRecord.length
//     const row = [...carsRecord]
//     row.splice(index, 1)
//     // row.splice(index,1)
//     //const rowpop = row.pop(index)
//     //console.log("row" , row)
//     //console.log("pop" , rowpop)
//     //row.pop(index,1)
//     setCarsRecord(row)
//   }
//   // const filterPosts = (index, query) => {
//   //   if (!query) {
//   //     return carsRecord;
//   //   } else if (carsRecord.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
//   //     return carsRecord;
//   //   }
//   // }

//   // const filterPost = (e) => {
//   //   const keyword = e.target.value;

//   //   if (keyword !== '') {
//   //     const result = carsRecord.filter((carname) => {
//   //       return carname.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
//   //     })
//   //     setCarsRecord(result)
//   //   } else {
//   //     setCarsRecord(carsRecord)
//   //   }
//   //   setName(keyword)
//   // }

//   const [query, setQuery] = useState("");
//   const keys = ["name","year","origin"];
//   const search = (data) => {
//     return data.filter((item) =>

//       //keys.some((key) => item[key].toLowerCase().includes(query))
//       keys.some((key) => item[key].toLowerCase().includes(query))

//     );
//   };

// // const  handleDelete = id => {
// //     const olditem = [...carsRecord]
// //     const item = olditem.filter((element , i) => {
// //       return i !==id
// //     })
// //     setCarsRecord(item)

// //   }
//   return (
//     <div>
//       <div className='text-center'>
//         {/* <input type="text" placeholder='search' onChange={e => { setSearch(e.target.value) }}onInput={filterPosts}></input> */}
//         {/* <input
//           type="search"
//           value={name}
//           onChange={filterPost}
//           className="input"
//           placeholder="Filter"
//         /> */}
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={newRecord.name || ""}
//           onChange={handleChange}
//           placeholder="Name "
//         />
//         <br />
//         <input
//           type="date"
//           name="year"
//           value={newRecord.year || ""}
//           onChange={handleChange}
//           placeholder="year"
//         />
//         <br />
//         <input
//           type="text"
//           name="origin"
//           value={newRecord.origin || ""}
//           onChange={handleChange}
//           placeholder="origin"
//         />
//         <br />
//         <input type="submit" value="Submit" />
//         <button onClick={deleteRow}>x</button>
//       </form>
//       <Table cars={search(carsRecord)} />
//     </div>
//   )
// }
// export default AddAndDelete



import React, { useState } from 'react';
import Users from './car.json'
import Table from './tables'

function AddAndDelete(props) {
  const [newRecord, setRecords] = useState({});
  const [carsRecord, setcarsRecord] = useState(Users);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecords(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   

      setRecords(newRecord)
      const data = [...carsRecord, newRecord];
      setcarsRecord(data)
      setRecords({})
    
  }
  const deleteRow = (index) => {
    const row = [...carsRecord]
    row.splice(index, 1)
    //row.pop(1)
    setcarsRecord(row)
  }

  const [query, setQuery] = useState("");
  const keys = ["name", "year", "origin"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };


  const updateMyData = (rowIndex, columnId, value) => {
    setRecords(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
  return (

    <div>
      <div className='text-center'>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <button onClick={deleteRow}>x</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required="required" 
          value={newRecord.name || ""}
          onChange={handleChange}
          placeholder="name "
        />
        <br />
        <input
          type="text"
          name="year"
          value={newRecord.year || ""}
          onChange={handleChange}
          placeholder="year"
          required="required" 
        />
        <input
          type="text"
          name="origin"
          value={newRecord.origin || ""}
          onChange={handleChange}
          placeholder="origin"
          required="required" 
        />
        <br />


        <input type="submit" value="Submit" />
      </form>
      {/* <Table cars={search(carsRecord)} updateMyData={updateMyData} /> */}

      <Table cars={search(carsRecord)} s />

    </div>

  )
}
export default AddAndDelete