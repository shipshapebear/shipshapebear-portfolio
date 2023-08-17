import React from 'react'
import { menuLinks } from './Menu'
import { Link } from 'gatsby'

function Header3() {
  return (
    <div className='z-50 shadow-sm shadow-slate-900/20 bg-neutral-900/40'>
      <div className='max-w-screen-xl mx-auto px-12'>
        <div className=' h-[90px] flex justify-between px-10 items-center'>
          <Link to="/" className='text-slate-50'>
            Logo
          </Link>
          <ul className='flex gap-10 text-slate-50'>
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