// import React from 'react'

// function Edit(props) {

//   const [editData, setEditData] = useState({
//     name:"",
//     year:"",
//     origin:""
//   })
//   function handleChange(e) {
//     setNewName(e.target.value);
//   }
//   <input
//   id={props.id}
//   className="todo-text"
//   type="text"
//   value={newName}
//   onChange={handleChange}
// />
// function handleSubmit(e) {
//   e.preventDefault();
//   props.editTask(props.id, newName);
//   setNewName("");
//   setEditing(false);
// }

//   return (
//     <div>
//     <form className="stack-small"  onSubmit={handleSubmit}>
//     <div className="form-group">
//       <label className="todo-label" htmlFor={props.id}>
//         New name for {props.name}
//       </label>
//       <input id={props.id} className="todo-text" type="text" />
//     </div>
//     <div className="btn-group">
//       <button type="button" className="btn todo-cancel">
//         Cancel
//         <span className="visually-hidden">renaming {props.name}</span>
//       </button>
//       <button type="submit" className="btn btn__primary todo-edit">
//         Save
//         <span className="visually-hidden">new name for {props.name}</span>
//       </button>
//     </div>
//   </form>

//     </div>
//   )
// }

// export default Edit