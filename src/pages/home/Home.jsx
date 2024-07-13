import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header className='p-6 bg-gray-200 flex justify-center items-center'>
                header
            </header>
            <Link to='/login' className='mx-2'>
                go to login</Link>
            <Link to='/profile' className='mx-2'>
                go to profile</Link>
            <footer className='p-6 bg-gray-200 flex justify-center items-center'>
                footer
            </footer>
        </div>
    )
}

export default Home