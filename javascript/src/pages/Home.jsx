import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const navigatePage = [
        {path: "/alphaNumericPalindrome", value: "AlphaNumericPalindrome"},
        {path: "/alternativeStringArrange", value: "AlternativeStringArrange"},
    ]
  return (
    <div>
        {navigatePage.map(({path, value}, i) => (
            <div key={i}>
                <Link to={path}>
                <span>{value}</span>
                </Link>
                
            </div>
        ))}
        
    </div>
  )
}

export default Home