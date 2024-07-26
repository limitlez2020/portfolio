import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Body = () => {
  return (
    <div className="bg-gray-dark container w-full max-w-6xl mx-auto pt-8">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-flow-row-dense gap-5">
        {/* Location: */}
        <div className="bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg sm:h-40 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/public/map.jpg')] bg-cover bg-center rounded-lg
                          transition-transform duration-1000 ease-in-out transform hover:scale-150">
          </div>
          <div className='absolute w-full p-2'>
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Location</p>
              <p className="relative text-xs text-neutral-500">Virginia</p>
            </div>
            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>
        </div>

        
        {/* Mode: Available */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg sm:h-40'>
          <div className='p-2'>
            {/* Top part: */}
            <div className='flex justify-between items-center'>
              <p className='text-xs text-off-white'>Mode</p>
              {/* The blinking dot: */}
              <div className='relative flex items-center justify-center'>
                {/* Inner dot: */}
                <div className="relative inline-flex w-1 h-1 rounded-full bg-lime-500"></div>
                {/* Outer blink glow: */}
                <div className="absolute flex w-2 h-2 rounded-full opacity-75 animation-delay-1000
                                animate-ping bg-lime-500"></div>
              </div>
            </div>

            {/* Draw a line: */}
            <div className='border-b-1 border-gray-lightest mt-1'></div>

            {/* Bottom part: */}
            <p className='text-xs text-off-white font-semibold max-sm:mt-16 sm:mt-4'>
              Available for hire in Software Engineering roles. Hit me up to chat 🦾
            </p>

            <button className='text-xs text-off-white flex w-full items-center justify-between bg-gray-lighter
                             border-1 border-gray-lightest mt-3 rounded-full p-1 px-2 sm:w-full
                             hover:border-neutral-400'>
              <a href="mailto:fortuneakinremi@gmail.com?" target="_blank" rel="noreferrer">
                Contact me
              </a>

              <ArrowUpRightIcon
                className="text-off-white size-[12px] inline-block"
              />
            </button>
          </div>
        </div>



        {/* About: */}
        <div className='bg-gray-light border-1 border-gray-lightest z-20
                          rounded-lg col-span-2 relative w-full p-3 pb-0'>
          {/* Top Text: */}
          <div className='flex justify-between items-center'>
            <p className="relative text-xs text-off-white">About</p>
            <p className="relative text-xs text-neutral-500">Fortune Akinremi</p>
          </div>

          {/* Draw a line: */}
          <div className="border-b-1 border-gray-lightest mt-1"></div>

          {/* Content: */}
          <p className='text-xs text-off-white font-semibold leading-5 mt-6'>
            I am a dynamic Software Engineer specializing in Frontend Development,
            with an appetite for creating digital masterpieces and creative solutions.
            When not designing or coding, I'm probably binge-watching TV shows or catching up
            on sleep. Anyways, let's make some magic together and give the world
            a taste of our innovative superpowers.
          </p>
        </div>



        {/* Experience & Education */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg col-span-2 row-span-2 overflow-hidden'>
          <div className='w-full p-2'>
            {/* Top Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Experience & Education</p>
            </div>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>


            {/* Top Shade: */}
            <div className="bg-gradient-to-b w-full absolute z-10 from-gray-light via-gray-light
                            to-transparent h-14 transition-all ease-in duration-200">
            </div>
            {/* Scroll Through Experience: */}
            <div className="overflow-y-auto h-[340px] overflow-hidden no-scrollbar scroll-smooth relative">
              {/* Content: */}
              <div className='flex gap-x-3 mt-10 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2024 - Now</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Headstarter AI</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Fellow</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2023 - 2024</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Tufts University</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Web Designer & Developer</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2023 - 2024</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Tufts University</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Administrative Staff</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2020 - 2024</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Tufts University</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Graduate Bachelor's Degree in Computer Science</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2023</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Hampton University</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Researcher</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2023</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Crawl Technologies</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Brand Marketer</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2022</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>NASA</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Finalist in NASA MITTIC Competition</p>
                </div>
              </div>
              <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

              {/* Content: */}
              <div className='flex gap-x-3 mt-4 px-2 mb-6'>
                <p className='text-xs text-neutral-400 w-20 shrink-0'>2019 - 2020</p>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Brightview Senior Living</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Utility - Managed kitchen operations and packaged take-out orders</p>
                </div>
              </div>

            </div>
            {/* Bottom shade: */}
            <div className="bg-gradient-to-t w-full absolute z-10 from-gray-light via-gray-light to-transparent
                            bottom-0 h-12 transition-all ease-in duration-200">
            </div>
          </div>
        </div>




        {/* Projects: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg col-span-2 row-span-2 min-h-[50px]'>
          {/* Container: */}
          <div className='w-full p-2'>
            {/* Top Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Projects</p>
            </div>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>

            {/* Projects: */}
            <div>
              {/* Project 1: */}
              <div className="flex items-center p-2 gap-x-6 mt-9 border-b-1 border-neutral-800 pb-3">
                <div className="size-14 object-cover bg-[url('/public/map.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-1000 ease-in-out transform hover:scale-110
                                border-gray-lightest border-1 cursor-pointer">
                </div>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Wordle Game</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Fellow</p>
                </div>
              </div> 

              {/* Project 2: */}
              <div className="flex items-center p-2 gap-x-6 mt-4 border-b-1 border-neutral-800 pb-4">
                {/* Image: */}
                <div className="size-14 object-cover bg-[url('/public/map.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-1000 ease-in-out transform hover:scale-110
                                border-gray-lightest border-1 cursor-pointer">
                </div>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Todo-List App</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Fellow</p>
                </div>
              </div> 

              {/* Project 3: */}
              <div className="flex items-center p-2 gap-x-6 mt-4 mb-6">
                <div className="size-14 object-cover bg-[url('/public/map.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-1000 ease-in-out transform hover:scale-110
                                border-gray-lightest border-1 cursor-pointer">
                </div>
                <div className='flex flex-col'>
                  <p className='text-xs text-off-white font-bold'>Tic-Tac-Toe</p>
                  <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Fellow</p>
                </div>
              </div> 
            </div>
          </div>         
        </div>



        {/* Contact: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg col-span-2 min-h-[50px]'>
          {/* Container: */}
          <div className='w-full p-2'>
            {/* Top Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Get in Touch</p>
            </div>

          {/* Draw a line: */}
          <div className="border-b-1 border-gray-lightest mt-1"></div>

          {/* Logos to reach out to me: */}
          <div className="flex justify-center gap-x-2 px-2 mt-8">
            {/* LinkedIn: */}
            <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                            p-2 w-16 h-16 flex items-center justify-center">
              Tweet
            </div>
            {/* Instagram: */}
            <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                            p-2 w-16 h-16 flex items-center justify-center">
              Tweet
            </div>
            {/* Facebook: */}
            <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                            p-2 w-16 h-16 flex items-center justify-center">
              Tweet
            </div>
            {/* Email: */}
            <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                            p-2 w-16 h-16 flex items-center justify-center">
              Tweet
            </div>
          </div>
          </div>          
        </div>

        {/* Latest Work: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg col-span-2 row-span-2'>
        </div>

        {/* Side Projects: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg col-span-2 row-span-1 min-h-[50px]'>
        </div>

        {/* Skills: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg h-44'>
        </div>

        {/* Hobbies: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg h-44 p-2'>
        </div>

        {/* Years of XP: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg h-44 p-2'>
        </div>

        {/* Resume */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg h-44 p-2'>
        </div>



        

      </div>
    </div>
  );
}

export default Body;
