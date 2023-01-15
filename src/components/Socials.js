import React from 'react';
import {ImFacebook, ImInstagram, ImYoutube} from 'react-icons/im';

const Socials = () => {
    return (
        <div className='hidden xl:flex ml-24'>
            <ul className='flex gap-x-4'>
                <li>
                    <a href='http://www.facebook.com' rel='noreferrer' target='_blank'>
                        <ImFacebook />
                    </a>
                </li>
                <li>
                    <a href='http://www.instagram.com/' rel='noreferrer' target='_blank'>
                        <ImInstagram />
                    </a>
                </li>
                <li>
                    <a href='http://www.youtube.com/' rel='noreferrer' target='_blank'>
                        <ImYoutube />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials