import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import AlphaNumericPalindrome from './components/String/AlphaNumericPalindrome'
import Home from './pages/Home'
import AlternativeStringArrange from './components/String/AlternativeStringArrange'
import BooyerMoor from './components/String/BooyerMoor'
import CheckAnagram from './components/String/CheckAnagram'
import CheckCamelCase from './components/String/CheckCamelCase'
import CheckExceeding from './components/String/CheckExceeding'
import CheckPascalCase from './components/String/CheckPascalCase'
import CheckRearrangePalindrome from './components/String/CheckRearrangePalindrome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-2'>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/alphaNumericPalindrome' element={<AlphaNumericPalindrome/>}></Route>
    <Route path='/alternativeStringArrange' element={<AlternativeStringArrange/>}></Route>
    <Route path='/booyerMoor' element={<BooyerMoor />}></Route>
    <Route path='/checkAnagram' element={<CheckAnagram />}></Route>
    <Route path='/checkCamelCase' element={<CheckCamelCase />}></Route>
    <Route path='/checkExceeding' element={<CheckExceeding />}></Route>
    <Route path='/checkPascalCase' element={<CheckPascalCase />}></Route>
    <Route path='/checkRearrangePalindrome' element={<CheckRearrangePalindrome />}></Route>
        
        
   </Routes>
    </div>
  )
}

export default App
