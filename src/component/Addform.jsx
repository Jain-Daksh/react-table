import React from 'react'
import { useState } from 'react'

function Addform() {
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
 
  return (
    <div>
      <form>
      <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
         <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email..."
          onChange={handleAddFormChange}
        />
         <input
          type="phone"
          name="phone"
          required="required"
          placeholder="Enter a phone..."
          onChange={handleAddFormChange}
        />
      </form>
    </div>
  )
}

export default Addform