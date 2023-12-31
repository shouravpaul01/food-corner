/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const { user, logout, loading } = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className=' bg-base-300'>
            <div className="navbar  my-container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link className="font-bold text-base md:text-3xl "><FontAwesomeIcon icon="fa-solid fa-utensils" className='pe-2 text-blue-600' />Food Corner</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="flex gap-5 text-lg px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/blog'>Blog</NavLink></li>
                    </ul>
                    
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className=" tooltip tooltip-left btn btn-outline btn-primary btn-circle avatar flex justify-center" data-tip={user.displayName && user.displayName}>
                                    <FontAwesomeIcon icon="fa-solid fa-user" className='text-base' beat />
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                    <li><Link onClick={handleLogout}><FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className='me-2' />Logout</Link></li>
                                </ul>
                            </div> : <div className='flex text-lg'> 
                                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login'>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-sm  btn-primary ms-4' : 'btn btn-sm btn-outline btn-primary ms-4'} to='/register'>Register <FontAwesomeIcon icon="fa-solid fa-user" className='ms-2' /></NavLink> 
                                </div>
                        }

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;