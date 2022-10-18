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


import React from 'react'
import { useState } from 'react'



function Addform(props) {
const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [phone , setPhone] = useState('')

const changeName = (e) => {
  setName(e.target.value);
}
const changeEmail = (e) => {
  setEmail(e.target.value);
}
const changePhone = (e) => {
  setPhone(e.target.value);
}
// const submitData = (e) => {
//   e.preventDefault()
// }
const submitData = (e) => {
  e.preventDefault()
  const val = {
    name,
    email,
    phone
  };
  props.function(val);
  clearState();
};

const clearState = () => {
  setName('');
  setEmail('');
  setPhone('')
};
  return (
    <div>
      <form >
      {/* <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={changeName}
        /> */}
        <input type="text" value={name} placeholder="Enter a name..." onChange={changeName} />
        <input type="email" value={email} placeholder="Enter a email..." onChange={changeEmail} />
        <input type="phone" value={phone} placeholder="Enter a phone..." onChange={changePhone} />
         {/* <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email..."
          onChange={changeEmail}
        />
         <input
          type="phone"
          name="phone"
          required="required"
          placeholder="Enter a phone..."
          onChange={changePhone}
        /> */}
              <button onClick={submitData}> Click Me</button>

      </form>
    </div>
  )
}

export default Addform