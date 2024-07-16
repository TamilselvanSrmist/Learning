import logo from './logo.svg';
import './App.css';
import { Home } from './authenticatePages/Home';
import { Login } from './authenticatePages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { BulkRegister } from './students/BulkRegister';
import { Design } from './Layout/Design';

function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bulk/register' element={<BulkRegister />} />
      <Route path='/home/*' element={<Design />} />
    </Routes>
    
     
    </div>
  );
}

export default App;
