import React from 'react'

const BooyerMoor = () => {
    const buildbadMatchTable = (str) => {
        const tableObj = {};
        for(let i = 0; i <str.length- 1; i++){
            tableObj[str[i]] = str.length -1-i

        }
      

    }
  return (
    <div>BooyerMoor</div>
  )
}

export default BooyerMoor