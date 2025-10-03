import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Cards from "../../assets/credit-cards.webp";

const Footer = () => {
  return (
    <footer className="bg-red-300 pt-12 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio molestias aut quo nesciunt veritatis. Eos iure quasi in quos.
            </p>
            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 895-725-3163
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Noida, Uttar Pradesh
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">Quick Links</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className='space-y-6'>
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className='flex items-center gap-3'>
              <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
              <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
              <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
              <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
            </div>
            <div>
              <p>Payment Methods</p>
              <img src={Cards} alt="Accepted credit cards" className='w-[80%]' />
            </div>
          </div>
          <p className='text-white text-center mt-8 border-t-2 pt-8'>@ 2025. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
