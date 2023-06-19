import React from 'react'

const Show = (prop) => {
  return (
    <>
    {prop.results.map((row)=>{
        return (
            <lu>{row}</lu>
        )
    })}
    
    </>
  )
}

export default Show
