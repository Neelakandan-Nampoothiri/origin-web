import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'



const Services = () => {
 
  const servicesdata = [
    {
        title : 'Web Development',
        description : "Modern, responsive websites designed to convert vistors into customers.",
        icon : assets.web_icon

    },
    {
        title : 'Mobile App Development',
        description : "Native and cross-platform applications built for growth.",
        icon : assets.app_icon

    },
    {
        title : 'UI/UX Design',
        description : "Beautiful and intuitive interfaces focused on user experience",
        icon : assets.design_icon

    },
    {
        title : 'Branding and Identity',
        description : "Logos, brand systems, and visual identities that stand out.",
        icon : assets.branding_icon


    },

    ]

  return (
    <motion.div 

    initial='hidden'
        whileInView='visible'
        transition={{staggerChildren:0.2}}
        viewport={{once:true}}
  
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title='Solutions We Deliver' desc='We transform ideas into powerful digital solutions, helping businesses grow with confidence.'/> 

         <div className='flex flex-col md:grid grid-cols-2'>
            {servicesdata.map((service,index)=>(<ServiceCard key={index} service={service} index={index}/>))}
          </div>    

        
    </motion.div>
  )
}

export default Services
