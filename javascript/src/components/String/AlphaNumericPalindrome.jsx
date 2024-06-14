import React, { useState } from 'react'

const AlphaNumericPalindrome = () => {
    const [str, setStr] = useState('')
    const [isPalindrome, setIsPalindrome] = useState(false)

    const handelOnSubmit =(e)=> {
        e.preventDefault()

        if(typeof str !== 'string'){
            throw new TypeError("Value must be a string")
        }
        
    const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase()
    // const midIndex = Math.floor(str.length/2)

    // for(let i = 0; i < midIndex; i++){
    //     if(newStr.at(i) === newStr.at(~i)){
    //         return setIsPalindrome(true)
    //     }
    //     else{
    //         return setIsPalindrome(false)
    //     }
    // }

        const isStrPalindrome = str.split('').reverse().join('')
        console.log(isPalindrome)
        if(newStr === isStrPalindrome){
            setIsPalindrome(true)
        } else {
             setIsPalindrome(false)
        }
        console.log(isPalindrome)
        return
    } 
    const alphaNumPalindrome = (str) => {
        if(typeof str !== 'string'){
            throw new TypeError("Argument must be a string")
        }
        const newStr = str.replace(/[a-z0-9]+gi/, '').toLowerCase()
        const midInd = Math.floor(newStr.length/2)
        const midIndex = newStr.length >> 1 //x >>y = floor(x/2^y)

        for(let i = 0; i<midInd; i++){
            if(newStr.at(i) !== newStr.at(~i)){
                //~n = -(n+1)
                return <div> {`${str}`}  is not a palidrome</div>
            }
        }
        return <div> {`${str}`}  is a palidrome</div>

    }

    function palidrome(str){
        str = str.replace(/[a-z0-9]+gi/, '').toLowerCase()
        const strReverse = str.split('').reverse().join('')
        if(str === strReverse){
            return <div> {`${str}`}  is a palidrome</div>
        } else {
              return <div> {`${str}`}  is not a palidrome</div>
        }

    }
 
    
  return (
    <div className='m-4'>
        <h1>{str}</h1>
        <form onSubmit={handelOnSubmit}> 
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="str">
      Enter the text to check Palindrome
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="str" 
       placeholder="Enter the text"
      type='text' onChange={(e) => setStr(e.target.value)}/>
      <p className="text-red-500 text-xs italic">Press enter to check</p>
       
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
        Enter
      </button>
      
    </div>
        </form>
    {str !== "" && <h1 className={isPalindrome? "mt-4 text-green-500" : "mt-4 text-red-500"}>{isPalindrome !== undefined && isPalindrome ? `${str} is Palindrome` : `${str} is not Palindrome`}</h1>}
        </div>
  )
}

export default AlphaNumericPalindrome