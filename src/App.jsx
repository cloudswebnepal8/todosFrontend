import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import "./App.css"
import About from './pages/About'
import PublicRoute from './routes/PublicRoute'
import Login from './pages/Login';
import Todo from './pages/Todo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={
          <PublicRoute>
            <Signup/>
          </PublicRoute>


        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>



        } />
        <Route path='/about' element={<About />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App