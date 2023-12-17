import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({isLogin, setIsLogin}) {
    const navigate  = useNavigate()
    
    const handleLogout  = ()=>{
        localStorage.removeItem('token');
        setIsLogin(false);
        navigate('/');
    }
    return (
        <nav>
            <div className="nav-wrapper #673ab7 deep-purple">
                <Link to='/' className="brand-logo">Quote App</Link>
                <ul id="nav-mobile" className="right">
                   

                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/create'>Create Quote</Link></li>
                    {
                        isLogin ? (
                            <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
                        ) : (
                            <>
                                <li><Link to='/signup'>Signup</Link></li>
                                <li><Link to='/signin'>Signin</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}
