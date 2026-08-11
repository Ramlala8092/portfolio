import React from 'react'
import Header from "../component/Header"
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
         <Header />
         <main className='h-[calc(100vh-100px)] w-full'>
           <Outlet />
         </main>
    </>     
  )
}

export default RootLayout
