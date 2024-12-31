import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext) 
    
    const handleLogout = () => {
        logOut()
        toast("Logout Successfully")
    }
    return (
        <div className="navbar bg-cyan-600 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/profile">My Profile</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/allServices">Services</NavLink></li>
                        <li><NavLink to="/aboutUs">About Us</NavLink></li>

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">CareerClimb</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/profile">My Profile</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/allServices">Services</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <div className='flex gap-2 justify-center items-center'>
                            <div title={user?.displayName}>
                                <img className='w-8 h-8 bg-[#272727] rounded-full' src={user?.photoURL} alt="Your Photo" />
                            </div>
                            <NavLink to="/login" onClick={handleLogout} className="btn bg-cyan-400 border-cyan-400 rounded-xl px-8 hover:bg-cyan-700 text-white">Log Out</NavLink>
                        </div>
                        :
                        <NavLink to="/login" className="btn bg-cyan-400 border-cyan-400 rounded-xl px-8 hover:bg-cyan-700 text-white">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;