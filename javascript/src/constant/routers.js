import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import AlphaNumericPalindrome from '../components/String/AlphaNumericPalindrome'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <AlphaNumericPalindrome />,
    },
    
  ]);