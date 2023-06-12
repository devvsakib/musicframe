import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Toaster } from 'react-hot-toast'
const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden w-full'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

export default MainLayout