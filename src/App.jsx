import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Python from './pages/Python/Python'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>      
        <Route path='/' element={<Home />}/>
        <Route path='/python/:sub' element={<Python/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App