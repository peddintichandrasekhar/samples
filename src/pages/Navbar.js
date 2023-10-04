import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar navbar-expand-lg nav-bg bg-white fixed-top pt-0'>
        <div className='cantainer'>
            <img src='https://mainwprentals.b-cdn.net/wp-content/uploads/2022/09/main_transparent1_2x.png'alt='img'></img>
        </div>
        <div>
          <ul className='navbar-nav li-items'>
            <li className='list'>
              <Link className='link' to='/home'>Home</Link>
            </li>
            <li className='list'>
              <Link className='link' to='/demos'>Demos</Link>
            </li>
            <li className='list'>
              <Link className='link' to='properties'>properties</Link>
            </li>
            <li className='list'>
              <Link className='link' to='/owners'>Owners</Link>
            </li>
            <li className='list'>
              <Link className='link' to='features'>Features</Link>
            </li>
            <li className='list'>
              <Link className='link' to='pages'>Pages</Link>
            </li>
            <li className='list'>
              <Link className='link' to='lognin'>Lognin</Link>
            </li>
            <li className='list'>
              <Link className='link' to='signin'>Signin</Link>
            </li>
            <li className='list'>
              <Link className='link' to='submit'>Submit</Link>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar;