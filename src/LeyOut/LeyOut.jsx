import React from 'react'
import Nav from '../Common/NavBar/Nav' 
import Footer from '../Common/Footer/Footer'

import {Outlet , useLocation}from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion , AnimatePresence } from 'framer-motion'
function LeyOut() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
      
      key = {location.pathname}
      
      >
      <Nav/>
      <Outlet/>
      <Footer/>
    </motion.div>
    </AnimatePresence>
    
  )
}

export default LeyOut
