// import React from 'react'
// import { useState } from 'react'

// function Addform() {
//   const [addFormData, setAddFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });


//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData };
//     newFormData[fieldName] = fieldValue;

//     setAddFormData(newFormData);
//   };

//   return (
//     <div>
// <form>
// <input
//     type="text"
//     name="name"
//     required="required"
//     placeholder="Enter a name..."
//     onChange={handleAddFormChange}
//   />
//    <input
//     type="email"
//     name="email"
//     required="required"
//     placeholder="Enter a email..."
//     onChange={handleAddFormChange}
//   />
//    <input
//     type="phone"
//     name="phone"
//     required="required"
//     placeholder="Enter a phone..."
//     onChange={handleAddFormChange}
//   />
// </form>
//     </div>
//   )
// }

// export default Addform


// import React from 'react'
// import { useState } from 'react'



// function Addform(props) {
// const [name , setName] = useState('')
// const [email , setEmail] = useState('')
// const [phone , setPhone] = useState('')

// const changeName = (e) => {
//   setName(e.target.value);
// }
// const changeEmail = (e) => {
//   setEmail(e.target.value);
// }
// const changePhone = (e) => {
//   setPhone(e.target.value);
// }
// // const submitData = (e) => {
// //   e.preventDefault()
// // }
// const submitData = (e) => {
//   e.preventDefault()
//   const val = {
//     name,
//     email,
//     phone
//   };
//   props.function(val);
//   clearState();
// };

// const clearState = () => {
//   setName('');
//   setEmail('');
//   setPhone('')
// };
//   return (
//     <div>
//       <form >
//       {/* <input
//           type="text"
//           name="name"
//           required="required"
//           placeholder="Enter a name..."
//           onChange={changeName}
//         /> */}
//         <input type="text" value={name} placeholder="Enter a name..." onChange={changeName} />
//         <input type="email" value={email} placeholder="Enter a email..." onChange={changeEmail} />
//         <input type="phone" value={phone} placeholder="Enter a phone..." onChange={changePhone} />
//          {/* <input
//           type="email"
//           name="email"
//           required="required"
//           placeholder="Enter a email..."
//           onChange={changeEmail}
//         />
//          <input
//           type="phone"
//           name="phone"
//           required="required"
//           placeholder="Enter a phone..."
//           onChange={changePhone}
//         /> */}
//               <button onClick={submitData}> Click Me</button>

//       </form>
//     </div>
//   )
// }

// export default Addform



// import { useState } from 'react';

// const Addform = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const [carNewData, setCarNewData] = useState({
//     name: '',
//     year: '',
//     origin: ''
//   })
//   const onSave = e => {
//     e.preventDefault();
//     console.log('carNewData.name ', carNewData.name);
//     console.log('carNewData.model ', carNewData.model);

//     setCarNewData('')
//   }
//   const inputsHandler = (e) => {
//     setCarNewData(e.target.value)
//   }
//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log('firstName ', firstName);
//     console.log('lastName ', lastName);
//     setFirstName('');
//     setLastName('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="first_name"
//           type="text"
//           placeholder="car name"
//           onChange={event => setFirstName(event.target.value)}
//           value={firstName}
//         />
//         <input
//           name="last_name"
//           type="text"
//           placeholder="car name"
//           value={lastName}
//           onChange={event => setLastName(event.target.value)}
//         />

//         <button type="submit">Submit form</button>
//       </form>
//       <form onSubmit={onSave}>
//         <input
//           type="text" name='name'
//           onChange={inputsHandler}
//           placeholder="car name"
//           value={carNewData.name}
//         />
//         <input
//           type="text" name='model'
//           onChange={inputsHandler}
//           placeholder="car model"
//           value={carNewData.model}
//         />
//         <button >Submit Now</button>
//       </form>
//     </div>
//   );
// };

// export default Addform;




import React, {useState} from 'react';
import cars from './cars.json'
import Table from './tables';

function AddAndDelete(props) {
    const [cars , setCars] = useState({});
    const [carNewData , setCarNewData] = useState(cars);

    const handleChange = (e) => {
        
      const name = e.target.name;
      const value = e.target.value;
      setCars(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setCars(cars)
      const data = [...carNewData, cars];
      setCarNewData(data)
      setCars({})
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={ cars.name || "" }
            onChange={handleChange}
            placeholder="car Name "
          />
          <br/>
          <input
            type="text"
            name="year"
            value={ cars.year || "" }
            onChange={handleChange}
            placeholder="age"
          />
          <br/>
          <input
            type="text"
            name="city"
            value={ cars.origin || "" }
            onChange={handleChange}
            placeholder="origin"
          />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <Table users={carNewData} />
      </div>
    )
}
export default AddAndDelete




import React, { useState } from 'react';
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
