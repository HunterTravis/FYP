import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
