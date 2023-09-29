import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar navbar-expand-lg fixed-top'>
        <div className='cantainer'>
            <img className='img'src='https://mainwprentals.b-cdn.net/wp-content/uploads/2022/09/main_transparent1_2x.png'alt='img'></img>
        </div>
        <div>
          <ul className='nav'>
            <li>
              <Link className='Link' to='/home'>Home</Link>
            </li>
            <li>
              <Link className='Link' to='/demos'>Demos</Link>
            </li>
            <li>
              <Link className='Link' to='properties'>properties</Link>
            </li>
            <li>
              <Link className='Link' to='/owners'>Owners</Link>
            </li>
            <li>
              <Link className='Link' to='features'>Features</Link>
            </li>
            <li>
              <Link className='Link' to='pages'>Pages</Link>
            </li>
            <li>
              <Link className='Link' to='lognin'>Lognin</Link>
            </li>
            <li>
              <Link className='Link' to='signin'>Signin</Link>
            </li>
            <li>
              <Link className='Link' to='submit'>Submit</Link>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar;