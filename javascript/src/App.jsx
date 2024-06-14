import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import AlphaNumericPalindrome from './components/String/AlphaNumericPalindrome'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/alphaNumericPalindrome' element={<AlphaNumericPalindrome/>}></Route>

   </Routes>
    </>
  )
}

export default App
