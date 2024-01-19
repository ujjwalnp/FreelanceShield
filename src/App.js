import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Create } from './pages/Create';

function App() {
  return (
    <div className="flex w-screen">
     <Navbar/>
     <div className='w-full'>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path="/" element={<Dashboard />} />

      </Routes>
     </div>

    
    
    </div>
  );
}

export default App;
