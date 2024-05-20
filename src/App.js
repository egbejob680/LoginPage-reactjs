import './App.css';
import LogingPage from './Component/LogingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import SignUp from './Component/SignUp';
import SideBar from './Component/SideBar';
import About from './Component/Pages/About'
import Analytics from './Component/Pages/Analytics'
import Product from './Component/Pages/Product'
import NavBar from './Component/NavBar';
import Logout from './Component/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='navbar' element={<NavBar/>}/>
           <Route path='dashboard' element={<Dashboard/>}/>
           <Route path='login' element={<LogingPage />}/>
           <Route path='signup' element={<SignUp/>}/>
           <Route path='sidebar' element={<SideBar/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='analytics' element={<Analytics/>}/>
           <Route path='products' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
