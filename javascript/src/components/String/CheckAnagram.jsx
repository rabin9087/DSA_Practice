import React from 'react'

const CheckAnagram = () => {

    const checkAnagramRegex = (str1, str2) => {
         // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both arguments should be strings.')
  }
    if(str1.length !== str2.length){
        return false
    }

    return ![...str1].reduce((str2Acc, cur) => str2Acc.replace(new RegExp(cur, 'i'), ''),
    str2) 
    }

    const value = checkAnagramRegex('node', 'deno')
    
    const checkAnagramMap = (str1, str2) => {
        if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both arguments should be strings.')
  }

  // If both strings have not same lengths then they can not be anagram.
  if (str1.length !== str2.length) {
    return false
  }
        
        const str1List = Array.from(str1.toUpperCase())
        
        const str1Occurances = str1List.reduce((map, char) => map.set(char, map.get(char) + 1 || 1),
            new Map())
        
        for (const char of str2.toUpperCase()) {
            if (!str1Occurances.has(char)) {
                return false
            }

            let getCharCount = str1Occurances.get(char)
            str1Occurances.set(char, --getCharCount)
            getCharCount === 0 && str1Occurances.delete(char)
        }
        return true
        
    }

    const newData = checkAnagramMap("slient", "listen")
    const data = checkAnagramMap("slient", "listn")
    
  return (
      <div>CheckAnagram ('node', 'deno'): ={">"}{value ? "Its True" : "Its false"}
          <p> checkAnagramMap("slient", "listen"): ={">"}{newData ? "Its True" : "Its false"}</p>
          <p> checkAnagramMap("slient", "listn"): ={">"}{data ? "Its True" : "Its false"}</p>
      </div>
  )
}

export default CheckAnagram