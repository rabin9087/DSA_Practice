import React from 'react'

const AlphaNumericPalindrome = () => {
    const alphaNumPalindrome = (str) => {
        if(typeof str !== 'string'){
            throw new TypeError("Argument must be a string")
        }
        const newStr = str.replace(/[^a-z0-9]+/gi, '').toLocaleLowerCase()
        const midInd = Math.floor(newStr.length/2)
        console.log(midInd)
        const midIndex = newStr.length >> 1 //x >>y = floor(x/2^y)
        console.log(newStr)

        for(let i = 0; i<midInd; i++){
            if(newStr.at(i) !== newStr.at(~i)){
                //~n = -(n+1)
                return false
            }
        }
        return true

    }
    const value = alphaNumPalindrome('rar')
    console.log(value)
    // console.log(alphaNumPalindrome('rabin'))
  return (
    <div>
        {value ? 'true': 'false'}</div>
  )
}

export default AlphaNumericPalindrome