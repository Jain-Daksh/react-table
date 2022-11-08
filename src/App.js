// import logo from './logo.svg';
// import './App.css';
// import DynamicTable from './component/DynamicTable';
// import DynamicTableOffline from './component/DynamicTableOffline';
// import Addform from './component/Addform';
// import Search from './component/Search';
// import Add from './component/Add';
// import AddData from './component/AddData';
// import Table from './component/Table';
// import FormDataAdd from './component/FormDataAdd';
// import Cars from './component/Cars';
// import FormData from './component/FormData';

// function App() {
//   return (
//     <div className="App">
//      {/* <DynamicTable />
//      <DynamicTableOffline /> */}
//     {/* <Search />
//     <Add /> */}
//     {/* <AddData /> */}
//     {/* <Table /> */}
//     {/* <FormDataAdd /> */}
//     <Cars />
// <Addform />
//     {/* <FormData /> */}
//     </div>
//   );
// }

// export default App;



import React from "react";
import Cars from "./component/Cars";
import User from "./component/User";
import './App.css';
import BasicTable from "./component/yt/Basic table/BasicTable";
function App() {
  return(
    <div className="app">
      <Cars />

      <BasicTable />
    </div>
  )

}export default App;

