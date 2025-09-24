import React from 'react'
import {MdMenu} from "react-icons/md"
import {SlEarphones} from "react-icons/sl"
// import {UpdateFollower} from "react-mouse-follower"
import {motion} from "framer-motion"
const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"#",
    },
    {
        id:2,
        title:"Categories",
        link:"#",
    },
    {
     id:3,
        title:"Blog",
        link:"#",
    },
    {
         id:4,
        title:"About",
        link:"#",
    },
    {
         id:5,
        title:"Contact",
        link:"#",
    }
]
const Navbar = () => {
  return (
<>
<div style={{padding:"0px 100px 0px 100px"}} className='bg-black text-white  font-varela'>

      <motion.nav 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.5}}
      className='container flex justify-between items-center'>
      
      <div>
        <a href='#' className='text-xl font-bold uppercase' >
            Playing / <span className='font-extralight text-white 70'>Market</span>
        </a>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          {NavbarMenu.map((item)=>(
            
            <li key={item.id}>
                <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
            </li>
          ))}  
          <button className='text-xl ps-14'>
            <SlEarphones/>
          </button>
          
        </ul>
      </div>
      <div className='md:hidden'>
        <MdMenu className='text-4xl'/>
      </div>
  </motion.nav>
          </div>
          </>
)
}

export default Navbar