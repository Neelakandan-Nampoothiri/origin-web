import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const Hero = () => {
  return (
    <div id="hero" className='relative overflow-hidden py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full text-gray-700 dark:text-white'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/20' />
        <div className='absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/15' />
      </div>

      <div className='relative flex flex-col lg:flex-row items-center gap-12'>
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6'>
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.7}}
            viewport={{once:true}}
            className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/10'
          >
            <img src={assets.group_profile} alt='' className='w-16' />
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300'>Trusted by 10+ clients</p>
          </motion.div>

          <motion.h1
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.8}}
            viewport={{once:true}}
            className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-semibold leading-[0.95] tracking-[-0.03em] text-gray-600 dark:text-gray-200 max-w-3xl'
          >
            Turning client visuals into <span className='whitespace-nowrap bg-[linear-gradient(135deg,#00F5FF_0%,#00C6FF_50%,#0072FF_100%)] bg-clip-text text-transparent'>digital success</span>
          </motion.h1>

          <motion.p
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.9}}
            viewport={{once:true}}
            className='max-w-xl text-sm sm:text-base font-medium leading-7 text-slate-500 dark:text-slate-300'
          >
            Building meaningful digital experiences that drive growth, trust, and lasting impact for modern brands.
          </motion.p>

          <motion.div
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:1.1}}
            viewport={{once:true}}
            className='flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:justify-start'
          >
            <a href='#contact-us' className='inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90'>Start project</a>
            <a href='#services' className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800'>View services</a>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:1.3}}
            viewport={{once:true}}
            className='grid w-full max-w-xl grid-cols-2 gap-4'
          >
 
 
      </motion.div>
        </div>

        <motion.div
          initial={{opacity:0, scale:0.95}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6, delay:1.2}}
          viewport={{once:true}}
          className='w-full lg:w-1/2 flex justify-center lg:justify-end'
        >
          <div className='relative w-full max-w-3xl lg:max-w-none sm:mr-20'>
            <div className='absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl' />
            <div className='absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl' />
            <motion.img
              src={assets.hero_img}
              className='relative w-full max-w-3xl sm:w-200'
              alt=''
              animate={{ y: [0, -20, 0, 15, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
            />
            <img src={assets.bgImage1} className='absolute -top-40 -right-40 hidden sm:block -z-10 dark:hidden' alt='' />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
