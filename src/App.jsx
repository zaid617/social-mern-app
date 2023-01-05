import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Reset from './pages/resetpass/Reset';



function App() {


  const baseUrl = "https://social-mern-server-production.up.railway.app"


  return (
    <>{
      (isLogin) ?

        <Routes>

          <Route path="/" element={

            <Home baseUrl={baseUrl}/>
          } />
          <Route path="profile" element={

            <Profile baseUrl={baseUrl}/>

          } />
          <Route path="*" element={<Navigate to={"/"} replace="true" />} />

        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login  baseUrl={baseUrl}/>} />
          <Route path="register" element={<Register  baseUrl={baseUrl}/>} />
          <Route path="resetPassword" element={<Reset  baseUrl={baseUrl} />} />
          <Route path="*" element={<Navigate to={"/"} replace="true" />} />
        </Routes>

    }
    </>
  );
}

export default App;
