import React from 'react'

const CheckExceeding = () => {
    const checkExceedingString = (str) => {
        if (typeof str !== "string") {
            throw new TypeError("Argument is not a string")
        }
        const uppercase = str.toUpperCase().replace(/[^A-Z]/g, '')

        const adjcentCharList = []

        for (let i = 0; i < uppercase.length - i; i++){
            const { [i]: char, [i + 1]: adjcentChar } = uppercase
            console.log(char, adjcentChar)
            if (char !== adjcentChar) {
                adjcentCharList.push(Math.abs(char.charCodeAt()-adjcentChar.charCodeAt()))
            }
        }

        console.log(adjcentCharList)

        for (let i = 0; i < adjcentCharList.length - 1; i++){
            const { [i]: char, [i + 1]: secondCharDiff } = adjcentCharList
            
            if (char > secondCharDiff) {
                return false
            }
        }
        return true

    }

    const data = checkExceedingString("delete")
     const data2 = checkExceedingString("update")
   
  return (
      <div>CheckExceeding
          <p>checkExceedingString("delete"): {data ? "Its a true" : 'Its a false'}</p>
           <p>checkExceedingString("update"): {data2? "Its a true": 'Its a false' }</p>
    </div>
  )
}

export default CheckExceeding