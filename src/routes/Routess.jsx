import React from 'react'

import {Routes, Route } from 'react-router-dom';
import UpdateProduct from '../components/UpdateProduct';
import Dashboard from '../page/Dashboard'
import Products from '../page/Products'


const Routess = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/catalog' element={<Products/>} />
        <Route path='/category/:slug' element={<UpdateProduct/>} />

      </Routes>
  )
}

export default Routess