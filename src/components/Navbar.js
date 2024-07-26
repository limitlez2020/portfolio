import React from 'react';
import {ArrowLongRightIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="bg-gray-dark pb-5 pt-10 border-gray-lightest border-b-1
                      w-full max-w-6xl mx-auto flex">
      <div className="container mx-auto flex justify-between items-center">
        {/* Top Left: */}
        <div className='flex gap-x-3 items-center'>
          {/* Add a logo: */}
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full border-1 border-gray-lightest"
          />
            
          {/* Add my name and role: */}
          <div>
            <div className="text-off-white text-xs">Fortune Akinremi</div>
            <div className="text-gray-text text-xs">Software Engineer</div>
          </div>
        </div>


        {/* Top Right: */}
        <div>
          {/* Add a button to download my resume: */}
          <button className='text-off-white text-xs items-center justify-between
                               px-5 py-1 border-1 border-neutral-600 rounded-full
                               hover:border-neutral-400'>
            <a href="/David_Fortune_Akinremi_Resume.pdf" target="_blank" rel="noreferrer">
              Check my Resume

              <ArrowLongRightIcon
                className="text-gray-text size-4 inline-block ml-2"
              />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
