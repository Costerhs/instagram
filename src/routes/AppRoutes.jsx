import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Recomendation from '../components/recomendation/Recomendation'
import Home from '../page/home/Home'
import Sign from '../page/Sign/Sign'
import User from '../page/User/User'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/signIn' element={<Sign />} />
            <Route path='/signUp' element={<Sign />} />
            <Route path='/' element={<Home />} />
            <Route path='/recomendation' element={<Recomendation isPage />} />
            <Route path='/user/:id' element={<User />} />
        </Routes>
    )
}

export default AppRoutes