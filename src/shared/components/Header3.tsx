import React from 'react'
import { menuLinks } from './Menu'
import { Link } from 'gatsby'

function Header3() {
  return (
    <div className='sticky top-0 z-50 bg-accent shadow-sm shadow-slate-900/20'>
      <div className='max-w-screen-xl mx-auto px-12'>
        <div className=' h-[90px] flex justify-between px-10 items-center'>
          <Link to="/">
            Logo
          </Link>
          <ul className='flex gap-10'>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header3