import React from 'react'

const CheckRearrangePalindrome = () => {
    const data2 = {
        fname: "Rabin"
    }
     console.log(Object.freeze(data2))
    console.log(data2.fname = "Sumit")
    console.log(data2)
    const rearrangePalindrome = (str) => {
        if (typeof str !== "string") {
            throw new TypeError("Argumnet is not a string")
        }

        const charCounts = [...str].reduce((counts, char) => {
            counts[char] = counts[char] ? counts[char] + 1 : 1
            counts[6]=2
            console.log(counts)
            console.log("counts", counts, "char", char)
            return counts
        },{})
        console.log(charCounts)

       
        return (Object.values(charCounts).filter((count) => count % 2 !== 0).length <= 1)
        
    }
    const data = rearrangePalindrome("aaeccrr")
    console.log(data)
  return (
      <div>CheckRearrangePalindrome
          <p>rearrangePalindrome("aaeccrr"): { data}</p>
    </div>
  )
}

export default CheckRearrangePalindrome