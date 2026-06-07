import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import {motion} from 'motion/react'



const ContactUs = () => {


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "26e0a133-1417-4b9c-92e4-75d70c81888e");
    
    try{
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        toast.success('Thank you for your submission!');
        event.target.reset();
    } else {
      toast.error(data.message)
    }
  

    } catch (error){
            toast.error(error.message)
    }

    }
  


  ;

  return (
    <motion.div 
    initial='hidden'
        whileInView='visible'
        transition={{staggerChildren:0.2}}
        viewport={{once:true}}
    
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 dark:text-white text-gray-700 pt-30'>
        <div>
            <Title title='Reach out to us' desc='Share your vision with us, and together we create digital solutions that drive growth, engagement and lasting impact.'/> 

            <motion.form 

            initial={{opacity:0 ,y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:0.4}}
                        viewport={{once:true}}
            
            
            className='grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl mt-10' onSubmit={onSubmit}>
                <div>
                    <p className='text-sm font-medium mb-2'>
                            Your name
                    </p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt='' className=''/>
                        <input name="name" type='text' placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
                    </div>
                </div>
                 <div>
                    <p className='text-sm font-medium mb-2'>
                            Email id
                    </p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt='' className=''/>
                        <input name="email"type='email' placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
                    </div>
                </div>

                 <div className='sm:col-span-2'>
                    <p className='text-sm font-medium mb-2'>
                            Project Details
                    </p>
                    <textarea name="message" rows={8} placeholder='Tell us about your project' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>
                    
                </div>

                <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103'>
                    Send Inquiry <img src={assets.arrow_icon} className='w-4' alt=''/>
                </button>

            </motion.form>
        </div>
       
    </motion.div>
  )
}

export default ContactUs
