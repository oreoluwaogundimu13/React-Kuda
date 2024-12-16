import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Logo.png'



const NavBar = () => {
  return (
    <div>
        <nav className='flex gap-[2rem] justify-around py-5 bg-slate-100 sticky '>
          <div>
            <img src={image} alt='' width='100'/>
          </div>
          <div>
            <ul className='flex gap-5'>
                <li className='text-purple-900'>
                    <Link to='/'>Personal</Link>
                </li>
                <li className='text-purple-900'>
                    <Link to='/business'>Business</Link>
                </li>
                <li className='text-purple-900'>
                    <Link to='/company'>Company</Link>
                </li>
                <li className='text-purple-900'>
                    <Link to='/help'>Help</Link>
                </li>
            </ul>
          </div>
          <div>

            <button className='text-purple-900 font-weig'>Sign In</button>
            <button className='bg-purple-900 text-white mx-4 px-5 py-2 rounded-md font-semibold'>Join Kuda</button>
          </div>
        </nav>
    </div>
  )
}

export default NavBar