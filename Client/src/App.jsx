
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar,Main,BookCard,AdminNav,AddBook } from './components';


function App() {

  return (
    <div className=' font-semibold text-xl'>
      <BrowserRouter>
        <div>
          <NavBar/>
        </div>
      <Routes>
        <Route path='/' element={<Main  nav={null} sect ={<BookCard/>}/>}/>
        <Route path='admin' element={<Main  nav={<AdminNav/>} sect ={<BookCard/>}/>}/>
        <Route path='addbook' element={<Main  nav={<AdminNav/>} sect ={<AddBook/>}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
