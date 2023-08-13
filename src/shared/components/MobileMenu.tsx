import React from 'react'
import { menuLinks } from './Menu'
import { Link } from 'gatsby-link'
import { useGlobal } from '@contexts/GlobalContext'

const MobileMenu = ({ style }: any) => {
    const { setMobileMenuActive } = useGlobal()
    return (
        <div className='bg-white h-screen fixed inset-0 z-40 '>
            <ul className="flex flex-col p-4 mt-[95px]">
                {menuLinks.map((val: any, index: any) => (
                    <li key={val.name + index}>
                        <Link className="nav-item" to={val.url} onClick={() => setMobileMenuActive(false)} >{val.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MobileMenu