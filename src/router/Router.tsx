import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Profile,Register,Forgot,Login } from '../containers';
import { Protected } from '../components';
import { useSelector } from 'react-redux';
export default function Router() {

    const {isLoggedIn} = useSelector((state:any)=>state.loginStore);
    
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Protected isLoggedIn={isLoggedIn}>
            <Profile /></Protected>} />
        </Routes>
    )
}