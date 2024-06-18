import React from 'react'

const CheckPascalCase = () => {
    const pascalCase = (str) => {
        if (typeof str !== "string") {
            throw new TypeError("Argument is not a string")
        }

        const pat = /^[A-Z][A-Za-z]*$/
        return pat.test(str)
    }

    const value = pascalCase("CheckPascalCase")
    const value2 = pascalCase("checkPascalCase")
  return (
      <div>CheckPascalCase
          <p>pascalCase("CheckPascalCase"): {value ? "Its a pascal" : "Its not a pascal"}</p>
          <p>pascalCase("checkPascalCase"): { value2 ? "Its a pascal": "Its not a pascal"}</p>
    </div>
  )
}

export default CheckPascalCase