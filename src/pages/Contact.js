import React from 'react';
import WomanImg from '../img/contact/woman.png';


const Contact = () => {
    return (
        <section className='section bg-white'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
                    {/* bg */}
                    <div className='lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 z-0'></div>
                    {/* text & form */}
                    <div className='lg:flex-1 lg:pt-32 px- z-10'>
                        <h1 className='h1'>Contact me</h1>
                        <p className='mb-12'>I would love to get suggestion from you.</p>
                        {/* Form */}
                        <form className='flex flex-col gap-y-4'>
                            <div className='flex gap-x-10'>
                                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name' />
                                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='email' placeholder='Your email address' />
                            </div>
                            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your message' />
                            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
                        </form>
                    </div>
                    {/* Image */}
                    <div className='lg:flex-1 z-10'>
                        <img src={WomanImg} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact