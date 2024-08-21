import React from 'react'

const Button = () => {
  return (
    <>
      <div className="btn flex gap-5 mt-5 mx-5 fixed">
        <a href="#accordion"><button className='p-2 w-40 text-xl hover:bg-blue-600 bg-blue-500 text-white rounded'>Accordion</button></a>
        <a href="#search"><button className='p-2 w-40 text-xl hover:bg-blue-600 bg-blue-500 text-white rounded'>Serach Filter</button></a>
      </div>
    </>
  )
}

export default Button;
