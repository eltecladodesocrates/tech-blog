import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../context/auth'

const Header = () => {

    const {user} = useContext(AuthContext)

    return (
        // <header>
        //     <nav className='container nav-bar'>
        //         <h2>Welcome{user.email && `, ${user.email.substr(0, user.email.indexOf('@'))}`}</h2>
        //         <ul className='nav-bar-list'>
        //             <li><NavLink to='/'>Dashboard</NavLink></li>
        //             <li>{user.email && <NavLink to='/create'>Create</NavLink>}</li>
        //             <li>{user.email && <NavLink to='/edit'>Edit</NavLink>}</li>
        //             <li>{!user.email ? <NavLink className='log-button' to='/login'>Login</NavLink> : <Logout />}</li>
        //         </ul>
        //     </nav>
        // </header>
        <header>
            <h2>Logo</h2>
            <ul>
                <li><NavLink to='/'>Dashboard</NavLink></li>
                {user.email && <li><NavLink to='/create'>Create</NavLink></li>}
                {user.email && <li><NavLink to='/login'>Login</NavLink></li>}
                {user.email && <li><NavLink to='/signup'>Signup</NavLink></li>}
            </ul>
        </header>
    )
}

export default Header
