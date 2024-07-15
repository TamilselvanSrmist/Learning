import logo from './logo.svg';
import './App.css';
import { Home } from './authenticatePages/Home';
import { Login } from './authenticatePages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
