import React from 'react';
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
        <motion.div
        initial={{x:"-100%"}} whileInView={{x:"0%"}} transition={{duration: 1, times: [1] }} >
         <h1>C R U D</h1>
        </motion.div>

        <div>
          <NavLink to={'/Firebase-CRUD'} >Home</NavLink>
          <NavLink to={'/allUsers'} >All-User</NavLink>
          <NavLink to={"/addUsers"} >Add-User</NavLink>
        </div>
    </nav>
  )
}

export default NavBar
