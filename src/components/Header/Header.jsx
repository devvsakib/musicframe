import LayoutSize from '../Layouts/LayoutSize'
import { Link, useLocation } from 'react-router-dom';
import MFButton from '../Common/MFButton'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'About', path: '/about' },
  ]
  const location = useLocation();
  return (
    <header className='bg-white/10 backdrop-blur-sm py-0 relative'>
      <LayoutSize>
        <div className='navbar py-0 flex justify-between items-center'>
          <div className='navbar-star'>
            <div className="dropdown">
              <label tabIndex={0} className="cursor-pointer md:hidden pl-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 pl-4 py-5 shadow bg-base-100 rounded-box w-52 bg-tertiary/10 backdrop-blur-sm gap-5">
                {menus.map((menu, index) => (
                  <Link
                    key={index}
                    to={menu.path}
                    className={`text-base w-full hover:text-primary duration-200 ease-linear ${location.pathname === menu.path ? 'active' : ''}`}
                  >
                    {menu.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className='hidden md:block text-2xl font-bold'>
              <Link><img src='/images/logo.svg' className='w-44' /></Link>
            </div>
          </div>
          <div className='md:hidden'>
            <Link><img src='/images/logo.svg' className='w-36 sm:w-52' /></Link>
          </div>
          <nav className='navbar-center hidden md:flex justify-between'>
            <ul className='flex justify-between items-center gap-5 lg:gap-10'>
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.path}
                  className={`text-base nav-links ${location.pathname === menu.path ? 'active' : ''}`}
                >
                  {menu.name}
                </Link>
              ))}
              {
                user &&
                <Link to='/dashboard' className='text-base nav-links'>Dashboard</Link>
              }
            </ul>
          </nav >
          {
            user ?
              <div className="dropdown dropdown-end flex gap-3 items-center">
                <div className='text-sm'>
                  <MFButton text='Logout' fnc={logOut} />
                </div>
                <div className="avatar">
                  <div className="w-10 mask mask-squircle">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
              :
              <div className='flex text-base gap-5 items-center'>
                <div className='font-semibold'>
                  <Link to='/login' className='transition-all hover:text-primary duration-200 ease-linear'>Login</Link>
                </div>
                <div className='font-bold'>
                  <MFButton text='Register' path="/register" />
                </div>
              </div>
          }
        </div>
      </LayoutSize>
    </header>
  )
}

export default Header