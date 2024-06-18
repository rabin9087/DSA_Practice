import React from 'react'

const CheckCamelCase = () => {
    const checkCamelCase = (varName) => {
        if (typeof varName !== "string") {
            throw new TypeError("Argument is not a string")
        }

        const check = /^[a-z][A-Za-z]*$/
        return check.test(varName)

    }
    const check = checkCamelCase("varName")
    const varname = checkCamelCase("VarName")
    console.log(check)
  return (
      <div>varName: ={">"} {check ? "Its a camel case" : "Its not a camel case"}
          <p>VarName: ={ ">"}{varname ? "Its a camel case" : "Its not a camel case"}</p></div>
  )
}

export default CheckCamelCase