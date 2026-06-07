import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import {motion} from 'motion/react' 


const Navbar = ({theme,setTheme}) => {

  const [sidebarOpen,setSidebarOpen] = useState(false)

  return (
    <motion.div
      initial={{opacity:0 ,y:-50}}
      animate={{opacity:1 ,y:0}}
      transition={{duration:0.6,ease:'easeOut'}}
      className='sticky top-4 z-30 px-4 sm:px-6'
    >

      <div className='mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/20 bg-white/60 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60'>
        <img
          src={theme === 'dark' ? assets.logo_dark : assets.logo}
          className='w-22 sm:w-26'
          alt=''
        />

        <div className='hidden sm:flex flex-1 justify-center'>
          <div className='flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-100'>
            <a href="#" className='transition-colors duration-200 hover:text-primary'>Home</a>
            <a href="#services" className='transition-colors duration-200 hover:text-primary'>Services</a>
            <a href="#our-work" className='transition-colors duration-200 hover:text-primary'>Our Work</a>
            <a href="#contact-us" className='transition-colors duration-200 hover:text-primary'>Contact Us</a>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            onClick={()=>setSidebarOpen(true)}
            className='w-8 sm:hidden'
            alt='Menu'
          />
        </div>
      </div>

      <div className={`text-slate-900 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:border-l max-sm:border-cyan-200/40 max-sm:bg-cyan-100/60 max-sm:dark:bg-cyan-900/40 max-sm:backdrop-blur-xl max-sm:shadow-2xl max-sm:shadow-cyan-900/10 max-sm:pt-20 flex sm:hidden gap-5 transition-all`}>
        <img src={assets.close_icon} className='w-5 absolute right-4 top-4' alt='' onClick={()=>setSidebarOpen(false)} />
        <a href="#" className='text-lg font-semibold' onClick={()=>setSidebarOpen(false)}>Home</a>
        <a href="#services" className='text-lg font-semibold' onClick={()=>setSidebarOpen(false)}>Services</a>
        <a href="#our-work" className='text-lg font-semibold' onClick={()=>setSidebarOpen(false)}>Our Work</a>
        <a href="#contact-us" className='text-lg font-semibold' onClick={()=>setSidebarOpen(false)}>Contact Us</a>
      </div>
    </motion.div>
  )
}
      

export default Navbar

