import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
        <Home/>
    <Footer/>
    </>
  )
}

export default AppLayout