import './App.css';
import LogingPage from './Component/LogingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='dashboard' element={<Dashboard/>}/>
           <Route path='/' element={<LogingPage />}/>

        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
