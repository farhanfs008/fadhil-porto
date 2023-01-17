import React from 'react';
import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const About = () => {
    return (
        <motion.section
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={transition1}
        className='section'>
            <div className='container mx-auto h-full relative'>
                {/* text & img wrapper */}
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                    {/* Image */}
                    <div className='flex-1 lg:mt-48 max-h-96 lg:max-h-max order-2 lg:order-none'>
                        <img src={WomanImg} alt='' />
                    </div>
                    {/* Text */}
                    <div className='flex-1 mt-48 pt-48 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='h1 mt-16 lg:mt-0'>
                            About Me
                        </h1>
                        <p className='mb-12 max-w-sm'>
                            My name is Muhammad Nifa Fadhil, a freelance <b>photographer</b> and also <b>videographer.</b> I have been working professionally in this field since 2019.<br /> <br />I live in Purworejo while also working freelance in and out the city
                        </p>
                        <Link to={'/portfolio'} className='btn'>View my Work</Link>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About