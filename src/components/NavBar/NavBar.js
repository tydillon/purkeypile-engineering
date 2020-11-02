import React, { useState } from 'react'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'
import Colors from '../../config/colors'

const links = [
  { to: '/about', display: 'About Us' },
  { to: '/credentials', display: 'Credentials' },
  { to: '/clients', display: 'Services' },
  { to: '/projects', display: 'Projects' },
  { to: '/contact', display: 'Contact Us' },
]

const NavBar = () => {
  const [burger, setBurger] = useState(false)
  return (
    <nav
      className='navbar is-fixed-top'
      role='navigation'
      aria-label='main navigation'
      style={{ ...styles.wrap, backgroundColor: Colors.PURPLE.mid }}
    >
      <div
        className='navbar-brand'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to='/'>
          <Logo />
        </Link>
        <div
          role='button'
          className={`navbar-burger burger ${burger && 'is-active'}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar'
          onClick={() => setBurger(!burger)}
          style={{
            // marginLeft: '10rem',
            color: 'white',
          }}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div
        id='navbar'
        className={`navbar-menu ${burger && 'is-active'}`}
        style={{ backgroundColor: Colors.PURPLE.mid }}
      >
        <div className='navbar-end'>
          {links.map((link) => (
            <div key={link.to} className='navbar-item'>
              <Link
                to={link.to}
                style={styles.link}
                onClick={() => setBurger(false)}
              >
                {link.display}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    border: Colors.PURPLE.mid,
    marginBottom: '3rem',
  },
  link: {
    color: 'white',
  },
}

export default NavBar
