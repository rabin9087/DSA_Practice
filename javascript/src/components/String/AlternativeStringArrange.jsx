import React from 'react'

const AlternativeStringArrange = () => {
    const string1 = 'rabin'
    const string2 = "shah"

    const arangeString = (string1, string2)=> {
        let output = ""
        if(typeof string1 !== 'string'  || typeof string2 !== 'string'){
            return "Not strings"
        }
        // const firstStrLength = string1.length
        // const secondStrLength = string2.length

        // const absLength = firstStrLength > secondStrLength ? firstStrLength : secondStrLength

        // for(let i=0; i < absLength; i++){
        //     if(i < firstStrLength){
        //         output += string1[i]
        //     }
        //     if(i< secondStrLength){
        //         output += string2[i]
        //     }
        // }

        for(let i = 0; i < string1.length || i < string2.length; i ++){
            if(i< string1.length){
                output += string1[i]
            }
            if(i< string2.length){
                output += string2[i]
            }
        }

        return output

    }

    const value = (arangeString("rabin", "shah"))
    console.log(value)



  return (
    <div className='m-4'>
        <p>AlternativeStringArrange</p>
        <h1>String1: rabin</h1><h1>String2: shah</h1>
        Arranged: {value}</div>
  )
}

export default AlternativeStringArrange