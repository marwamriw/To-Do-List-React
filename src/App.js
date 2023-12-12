
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Login/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
