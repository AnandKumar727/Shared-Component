import React from 'react'

const Input = ({name, placeholder, type="text"}) => {
  return (
    <input 
        className='border border-gray-300 rounded px-3 py-2 w-full'
        placeholder={placeholder}
        name={name}
        type={type}
    />
  )
}

export default Input