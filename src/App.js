import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import View from './component/View';
import Footer from './component/Footer';
import Login from './user/Login';
import Register from './user/Register'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="bg-gray-200  ">
      <BrowserRouter>

      
      <Routes>
      <Route path='/login' element={<Login/>}/>
     
      <Route path="/" element={<Navigate to="/login" />} />

        <Route path='/home' element={<Home/>}/>
        
        
    
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
       
        <Route path='/view/:id' element={<View/>}/>

        </Routes>
       
        </BrowserRouter>
   <ToastContainer position='top-center' autoClose={1000}/>
    </div>
  );
}

export default App;

