import React from 'react'
import LayoutSize from '../Layouts/LayoutSize'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='pt-10 border-t-2 border-primary bg-secondary'>
      <LayoutSize>
        {/* footer top */}
        <div className='grid md:grid-cols-3 gap-10 pb-14 text-white'>
          <div>
            <img src="/images/footerlogo.svg" alt="" />
            <p className='text-sm'>MusicFrame is a platform for music lovers to share their music and connect with other music lovers.</p>
          </div>
          <div>
            <h3 className='text-white text-2xl font-bold'>Contact Us</h3>
            <p className='text-white text-sm'>Email:
              <a href='mailto:devvsakib@gmail.com' className='text-tertiary'>
                devvsakib@gmail.com
              </a>
            </p>
            <p className='text-white text-sm'>Phone:
              <a href='tel:+8801712345678' className='text-tertiary'>
                +8801712345678
              </a>
            </p>

          </div>
          <div>
            <h3 className=' text-2xl font-bold'>Terms & Conditions</h3>
            <ul>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </LayoutSize>

      {/* footer bottom */}
      <div className='bg-quinary/50'>
        <LayoutSize>
          <div className='text-white text-center items-center flex flex-col gap-5 sm:flex-row justify-between py-4'>
            <div className='flex text-tertiary gap-3 text-lg'>
              <FaInstagram className='hover:text-primary cursor-pointer transition-all duration-200 ease-linear' />
              <FaTwitter className='hover:text-primary cursor-pointer transition-all duration-200 ease-linear' />
              <FaLinkedin className='hover:text-primary cursor-pointer transition-all duration-200 ease-linear' />
            </div>
            <p>@ Copyright {new Date().getFullYear()} MusicFrame</p>
          </div>
        </LayoutSize>
      </div>
    </footer >
  )
}

export default Footer