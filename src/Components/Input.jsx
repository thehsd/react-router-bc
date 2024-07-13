import React from 'react'

const Input = ({ placeholder, type, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input
                // onChange={(e) => setValue(e.target.value)}
                onChange={handleChange}
                className='p-4 bg-gray-200 rounded-md'
                placeholder={placeholder}
                type={type}
            />
        </>
    )
}

export default Input