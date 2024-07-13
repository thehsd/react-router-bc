import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <header>
                <nav>

                    <ul>
                        <li>
                            <NavLink to='/profile/orders'
                                className={({ isActive }) => {
                                    return isActive ? 'text-blue-500' : ''
                                }}>
                                orders
                            </NavLink>
                            <NavLink to='/profile/edit'
                                className={({ isActive }) => {
                                    return isActive ? 'text-blue-500' : ''
                                }}> editProfile</NavLink>
                            <NavLink to='/profile/addresses'
                                className={({ isActive }) => {
                                    return isActive ? 'text-blue-500' : ''
                                }}> addresses</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <br />
                this is profile
                <Outlet />
            </main>
            <footer>
                <footer className='p-6 bg-gray-200 flex justify-center items-center'>footer</footer>
            </footer>
        </div>
    )
}

export default Profile