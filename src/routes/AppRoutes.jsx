import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Recomendation from '../components/recomendation/Recomendation'
import Home from '../page/home/Home'
import Sign from '../page/Sign/Sign'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/signIn' element={<Sign />} />
            <Route path='/signUp' element={<Sign />} />
            <Route path='/' element={<Home />} />
            <Route path='/recomendation' element={<Recomendation isPage />} />
        </Routes>
    )
}

export default AppRoutes