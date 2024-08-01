"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-700 py-4 md:border-t-0">
      <h3
        className="text-lg font-bold mb-2 flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-2xl md:hidden">{isOpen ? '▲' : '▼'}</span>
      </h3>
      <ul className={`space-y-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerSections = [
    {
      title: "mettā muse",
      items: ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
    },
    {
      title: "QUICK LINKS",
      items: ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"]
    },
  ];

  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8 mt-[15px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Be the first to know */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">BE THE FIRST TO KNOW</h3>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-white text-black p-2 flex-grow mb-2 sm:mb-0 sm:mr-2"
              />
              <button type="submit" className="bg-gray-800 text-white p-2">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Call Us and Currency */}
          <div>
            <div className="flex flex-col gap-[8px]">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">CALL US</h3>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">CURRENCY</h3>
                <div className="flex items-center">
                  <Image src="/USA.png" alt="USA" width={20} height={15} />
                  <span className="ml-2">USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        {/* Collapsible sections */}
        <div className="flex flex-col md:flex-row gap-[4px] md:justify-between md:items-center flex-sm-col mt-8 w-full">
 
  {footerSections.map((section, index) => (
    <FooterSection key={index} title={section.title} items={section.items} />
  ))}
    <div className='flex flex-col'>
    <div className="mb-8">
    <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
    <div className="flex flex-wrap gap-2 ">
      {[{ icon: <FaInstagram /> }, { icon: <FaLinkedin /> }].map((item, index) => (
        <div key={index} className="flex items-center border rounded-[100px]">
          {item.icon}
        </div>
      ))}
    </div>
  </div>
  <div className="mt-8">
    <h3 className="text-lg font-bold mb-4">mettā muse ACCEPTS</h3>
    <div className="flex flex-wrap gap-2">
      {['gpay', 'mastercard', 'paypal'].map((payment) => (
        <Image
          key={payment}
          src={`/${payment}.png`}
          alt={payment}
          width={40}
          height={25}
        />
      ))}
    </div>
  </div>
    </div>
  
</div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
