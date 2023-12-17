
import { useState } from 'react';
import './App.css';
import CreateQuotes from './components/CreateQuotes';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './user/Profile';
import Signin from './user/Signin';
import Signup from './user/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'));
  return (
    <Router>
      <>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<CreateQuotes/>} />
          <Route path='/signin' element={<Signin setIsLogin={setIsLogin}/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
