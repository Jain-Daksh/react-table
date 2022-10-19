// import React from 'react'

// function Table(props) {


//   console.log(props)
//   return (
//     <div>

//       <table>
//         <thead>
//           <tr>
//             <td>
//              Car Name
//             </td>
//             <td>
//              yearOfOrigin
//             </td>
//             <td>
//              origin
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           {props.cars.map((item) => (
//             <tr>
//               <td>
//                 {item.name}
//               </td>
//               <td>
//                 {item.year}
//               </td>
//               <td>
//                 {item.origin}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table



// import React from 'react'

// function Table(props) {


//   console.log(props)
//   return (
//     <div>

//       {/* <table>
//         <thead>
//           <tr>
//             <td>
//              Car Name
//             </td>
//             <td>
//              yearOfOrigin
//             </td>
//             <td>
//              origin
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           {props.cars.map((item) => (
//             <tr>
//               <td>
//                 {item.name}
//               </td>
//               <td>
//                 {item.year}
//               </td>
//               <td>
//                 {item.origin}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//       <table>
//         <thead>
//           <tr>
//             <td>
//               Car Name
//             </td>
//             <td>
//               yearOfOrigin
//             </td>
//             <td>
//               origin
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             props.car.map((item) => (
//               <h1>{item.name}</h1>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table

//<!--------------------------working code-----------------------------!>

// import React from 'react'
// function Table(props) {
//   console.log(props.users)
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <td>
//              FirstName
//             </td>
//             <td>
//              Age
//             </td>
//             <td>
//              City
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           {props.users.map((items) => (
//             <tr>
//               <td>
//                 {items.fullName}
//               </td>
//               <td>
//                 {items.age}
//               </td>
//               <td>
//                 {items.city}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default Table


import React from 'react'
function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
             Name
            </td>
            <td>
             year
            </td>
            <td>
             City
            </td>
          </tr>
        </thead>
        <tbody>
          {props.cars.map((items) => (
            <tr>
              <td>
                {items.name}
              </td>
              <td>
                {items.year}
              </td>
              <td>
                {items.origin}
              </td>
              {/* <td>delete</td> */}
              
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}
export default Table