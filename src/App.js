import logo from './logo.svg';
import './App.css';
import DynamicTable from './component/DynamicTable';
import DynamicTableOffline from './component/DynamicTableOffline';
import Addform from './component/Addform';
import Search from './component/Search';

function App() {
  return (
    <div className="App">
     <DynamicTable />
     <DynamicTableOffline />
    <Search />
    </div>
  );
}

export default App;
