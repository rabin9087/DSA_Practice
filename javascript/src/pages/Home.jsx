import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const navigatePage = [
        {path: "/alphaNumericPalindrome", value: "AlphaNumericPalindrome"},
        {path: "/alternativeStringArrange", value: "AlternativeStringArrange"},
        { path: "/booyerMoor", value: "BooyerMoor" },
        { path: "/checkAnagram", value: "CheckAnagram" },
        { path: "/checkCamelCase", value: "CheckCamelCase" },
        { path: "/checkExceeding", value: "CheckExceeding" },
        { path: "/checkPascalCase", value: "CheckPascalCase" },
        { path: "/checkRearrangePalindrome", value: "CheckRearrangePalindrome" },
        
    ]
  return (
    <div>
        {navigatePage.map(({path, value}, i) => (
            <div key={i} className='inline-flex m-2'>
                <Link to={path} className=''>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">{value}</button>
                </Link>
                
            </div>
        ))}
        
    </div>
  )
}

export default Home