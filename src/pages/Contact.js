import React from 'react';
import WomanImg from '../img/contact/woman.png';
import { ImFacebook, ImYoutube, ImInstagram, ImWhatsapp} from 'react-icons/im';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={transition1} className='section bg-white'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 lg:pt-28 gap-x-8 text-center lg:text-left'>
                    {/* bg */}
                    <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={transition1} className='lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 lg:top-60 top-32 z-0'></motion.div>
                    {/* text & form */}
                    <div className='lg:flex-1 lg:pt-32 px- z-10'>
                        <div className='flex flex-col items-center mb-8'>
                            <h1 className='h1'>Contact me</h1>
                            <p className='mb-12'>I would love to get in touch with you.</p>
                            <a href='http://wa.me/62'>
                                <button className='btn'><ImWhatsapp className='mr-4 text-2xl'/> Send message</button>
                            </a>
                        </div>
                        {/* Soc */}

                        <div className='mb-12'>
                            <ul className='flex gap-x-4 text-2xl justify-center'>
                                <li>
                                    <a href='http://www.facebook.com' rel='noreferrer' target='_blank' className='hover:opacity-80'>
                                        <ImFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href='http://www.instagram.com/' rel='noreferrer' target='_blank' className='hover:opacity-80'>
                                        <ImInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href='http://www.youtube.com/' rel='noreferrer' target='_blank' className='hover:opacity-80'>
                                        <ImYoutube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Image */}
                    <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ transition: transition1, duration: 1.5 }} className='lg:flex-1 z-10'>
                        <img src={WomanImg} alt='' />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact