import React from 'react'
import { Link } from 'gatsby'
import { useGlobal } from '@contexts/GlobalContext'

const Announcement = () => {
    const { setMobileMenuActive } = useGlobal()
    return (
        <div className='w-full bg-orange-50/75 shadow-sm z-50 h-[40px]'>
            <div className='relative  h-full max-w-[1024px] mx-auto w-full px-4 text-center flex items-center justify-center text-sm text-black'>
                <p className='font-semibold'>Get your free consultation by clicking{" "} &nbsp;</p>
                <Link onClick={() => setMobileMenuActive(false)} className='font-semibold text-red-500' to="/#contact">{" "}here.</Link>
            </div>
        </div>)
}
export default Announcement