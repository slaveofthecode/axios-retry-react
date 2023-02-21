import React from 'react'
import { NavLink } from 'react-router-dom';
import { ROUTE } from '../../consts/routes';

export const Navigation = () => {
    const linkStyle = {
        active: {
          textDecoration: 'underline'
        },
        inactive: {
          textDecoration: 'none'
        }
      };

  return (
        <nav className="d-flex gap-3">
            <ul className='nav' >
                <li className='nav-item'>
                    <NavLink 
                        to={ROUTE.HOME}
                        className="nav-link" 
                        style={({ isActive }) =>
                            isActive ? linkStyle.active : linkStyle.inactive
                        } 
                    >Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink 
                        to={ROUTE.SEARCH_MOVIES}
                        className='nav-link' 
                        style={({ isActive }) =>
                            isActive ? linkStyle.active : linkStyle.inactive
                        }
                    >Search Movies</NavLink>
                </li>
            </ul>
        </nav>
  )
}
