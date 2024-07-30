import { ArrowDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';


const Body = () => {
  /********* VIEW RESUME: ********/
  const viewResume = () => {
    window.open('./David_Fortune_Akinremi_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  /********* DOWNLOAD RESUME: ********/
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = './David_Fortune_Akinremi_Resume.pdf';
    link.download = 'David_Fortune_Akinremi_Resume.pdf';
    link.click();
  };

  /********* OPEN GMAIL: ********/
  const openGmail = () => {
    const link = document.createElement('a');
    link.href = 'mailto:fortuneakinremi@gmail.com?';
    link.click();
  };


  return (
    <div className="bg-gray-dark w-full max-w-6xl mx-auto p-4 pt-8">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        
        {/* Location: */}
        <div className="border-1 cursor-pointer z-20 border-neutral-600 overflow-hidden relative rounded-lg sm:h-40">
          <div className='absolute w-full p-2 z-10'>
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Location</p>
              <p className="relative text-xs text-neutral-500">Virginia</p>
            </div>
            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>
 
          <img alt=''
              src="/map.jpg" 
              className="h-full w-full transition-all ease-in-out object-cover
                         duration-1000 transform hover:scale-150"
          >
          </img>
        </div>

        
        {/* Mode: Available */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          relative rounded-lg sm:h-40'>
          <div className='w-full p-2'>
            {/* Top part: */}
            <div className='flex justify-between items-center'>
              <p className='text-xs text-off-white'>Mode</p>
              {/* The blinking dot: */}
              <div className='relative flex items-center justify-center pr-2'>
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
            <div>
              <p className='text-xs text-off-white font-semibold max-sm:mt-16 sm:mt-4'>
                Available for hire in roles <br></br> in Software Engineering. <br></br> Hit me up to chat 🦾
              </p>

              <button className='text-xs text-off-white flex w-full items-center justify-between bg-gray-lighter
                              border-1 border-gray-lightest mt-3 rounded-full p-1 px-2 sm:w-full
                              hover:border-neutral-400'
                      onClick={openGmail}>
                Contact me
                <ArrowUpRightIcon
                  className="text-off-white size-[12px] inline-block"
                />
              </button>
            </div>
          </div>
        </div>



        {/* About: */}
        <div className="bg-gray-light border-1 border-neutral-600 z-20 relative justify-between
                          rounded-lg col-span-2">
          <div className="absolute w-full p-2 z-10">
            {/* Top Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">About</p>
              <p className="relative text-xs text-neutral-500">Fortune Akinremi</p>
            </div>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Content: */}
          <div className="mt-14 px-3 pb-3">
            <p className='text-xs text-off-white font-semibold leading-5'>
              I am a dynamic Software Engineer specializing in Frontend Development,
              with an appetite for creating digital masterpieces and creative solutions.
              When not designing or coding, I'm probably binge-watching TV shows or catching up
              on my beauty sleep.
            </p>
          </div>
        </div>



        {/* Experience & Education */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          rounded-lg col-span-2 row-span-2 relative overflow-hidden'>
          {/* Top Part */}
          <div className="absolute w-full p-2 z-20">
            {/* Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Experience & Education</p>
            </div>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Top Shade: */}
          <div className="bg-gradient-to-b w-full absolute z-10 from-gray-light via-gray-light
                          to-transparent h-20 transition-all ease-in duration-200">
          </div>

          {/* Scroll Through Experience: */}
          <div className="overflow-y-auto h-[340px] overflow-hidden no-scrollbar scroll-smooth relative">
            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-16 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2024 - Now</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Headstarter AI</p>
                <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Fellow</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2023 - 2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tufts University</p>
                <p className='text-xs text-neutral-500 font-semibold'>Web Designer & Developer</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2023 - 2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tufts University</p>
                <p className='text-xs text-neutral-500 font-semibold'>Administrative Staff</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2020 - 2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tufts University</p>
                <p className='text-xs text-neutral-500 font-semibold'>Graduate Bachelor's Degree in Computer Science</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2023</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Hampton University</p>
                <p className='text-xs text-neutral-500 font-semibold'>Software Engineer Researcher</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2023</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Crawl Technologies</p>
                <p className='text-xs text-neutral-500 font-semibold'>Brand Marketer</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2022</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>NASA</p>
                <p className='text-xs text-neutral-500 font-semibold'>Finalist in NASA MITTIC Competition</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className='flex gap-x-3 px-2 mt-4 mb-8 relative'>
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2019 - 2020</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Brightview Senior Living</p>
                <p className='text-xs text-neutral-500 font-semibold'>Utility - Managed kitchen operations and packaged take-out orders</p>
              </div>
            </div>

          </div>
          {/* Bottom shade: */}
          <div className="bg-gradient-to-t w-full absolute z-10 from-gray-light via-gray-light
                          to-transparent bottom-0 h-12 transition-all ease-in duration-200">
          </div>
        </div>




        {/* Projects: */}
        <div className='bg-gray-light border-1 border-gray-lightest shadow-xl
                          rounded-lg min-h-[50px] col-span-2 row-span-2 relative'>
          {/* Container: */}
          <div className="absolute w-full p-2 z-20">
            {/* Top Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Projects</p>
            </div>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Projects: */}
          <div className="mt-14 px-2">
            {/* Project 1: */}
            <div className="flex items-center p-2 gap-x-6 border-b-1 border-neutral-800 pb-3">
              {/* Link: */}
              <a href="https://limitlez2020.github.io/wordle-game/"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="size-14 object-cover bg-[url('/public/wordle_game.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-500 ease-in-out transform hover:scale-110
                                hover:rotate-3 border-gray-lightest border-1 cursor-pointer">
                </div>
              </a>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Wordle Game</p>
                {/* Give me a little explanation of the game: */}
                <p className='text-xs text-neutral-500 font-semibold'>
                  A word-guessing game to chill
                </p>
              </div>
            </div> 


            {/* Project 2: */}
            <div className="flex items-center p-2 gap-x-6 mt-4 border-b-1 border-neutral-800 pb-4">
              {/* Image + Link: */}
              <a href="https://limitlez2020.github.io/todo-app/"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="size-14 object-cover bg-[url('/public/todo_list.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-500 ease-in-out transform hover:scale-110
                                hover:rotate-3 border-gray-lightest border-1 cursor-pointer">
                </div>
              </a>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Todo-List App</p>
                {/* Gimme a little explanation of the app: */}
                <p className='text-xs text-neutral-500 font-semibold'>
                  A todo-list app for better productivity
                </p>
              </div>
            </div> 


            {/* Project 3: */}
            <div className="flex items-center p-2 gap-x-6 mt-4 mb-6">
              <a href="https://limitlez2020.github.io/tic-tac-toe/"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="size-14 object-cover bg-[url('/public/tic_tac_toe.jpg')] bg-cover bg-center rounded-lg
                                transition-transform duration-500 ease-in-out transform hover:scale-110
                                hover:rotate-3 sborder-gray-lightest border-1 cursor-pointer">
                </div>
              </a>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tic-Tac-Toe</p>
                {/* Gimme a little explanation of the game: */}
                <p className='text-xs text-neutral-500 font-semibold'>
                  A multiplayer tic-tac-toe game
                </p>
              </div>
            </div> 
          </div>
        </div>




        {/* Contact: */}
        <div className='bg-gray-light border-1 border-gray-lightest
                          rounded-lg min-h-[50px] col-span-2 relative'>
          {/* Top Part: */}
          <div className='absolute w-full p-2 z-20'>
            {/* Top Text: */}
            <p className="text-xs text-off-white">Get in Touch</p>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Logos to reach out to me: */}
          <div className="flex justify-center gap-x-2 px-2 pt-14 pb-4">
            {/* LinkedIn: */}
            <a  href="https://www.linkedin.com/in/david-akinremi/"
                target="_blank"
                rel="noopener noreferrer">
              <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                              p-2 w-16 h-16 flex items-center justify-center
                              object-cover bg-[url('/public/linkedin.jpg')] bg-cover bg-center
                              hover:scale-105 hover:border-off-white">
              </div>
            </a>

            {/* Github: */}
            <a  href="https://github.com/limitlez2020"
                target="_blank"
                rel="noopener noreferrer">
              <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                              p-2 w-16 h-16 flex items-center justify-center
                              object-cover bg-[url('/public/github.jpg')] bg-cover bg-center
                              hover:scale-105 hover:border-off-white">
              </div>
            </a>

            {/* Instagram: */}
            <a  href="https://www.instagram.com/akinremifortune/"
                target="_blank"
                rel="noopener noreferrer">
              <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                              p-2 w-16 h-16 flex items-center justify-center
                              object-cover bg-[url('/public/instagram.jpg')] bg-cover bg-center
                              hover:scale-105 hover:border-off-white">
              </div>
            </a>

            {/* Email: */}
            <a href="mailto:fortuneakinremi@gmail.com">
              <div className="rounded-full border-1 border-neutral-600 cursor-pointer
                              p-2 w-16 h-16 flex items-center justify-center
                              object-cover bg-[url('/public/email.jpg')] bg-cover bg-center
                              hover:scale-105 hover:border-off-white">
              </div>
            </a>
          </div>
        </div>




        {/************ LATEST WORK: *************/}
        <div className="bg-gray-light border-1 border-neutral-600 overflow-hidden relative
                          rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2">
          {/* Top Part: */}
          <div className="absolute w-full p-2 z-10">
            {/* Text: */}
            <div className='flex justify-between items-center'>
              <p className="relative text-xs text-off-white">Latest Work</p>
              <p className="relative text-xs text-neutral-500">Wordle Game</p>
            </div>

            {/* Line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Image: */}
          <a  href="https://limitlez2020.github.io/wordle-game/"
              target="_blank"
              rel="noopener noreferrer">
            <img alt=''
                loading='lazy'
                width={"900px"}
                height={"300px"}
                src="./latest_work.jpg" 
                className="h-full duration-1000 hover:scale-110 transition-all ease-in-out
                            object-cover bg-cover bg-center cursor-pointer"
            >
            </img>
          </a>
        </div>
        {/***********************************/}




        {/************ ACHIEVEMENTS: ************/}
        <div className="bg-gray-light border-1 border-neutral-600 rounded-lg
                          col-span-2 relative overflow-hidden">
          {/* Top Part: */}
          <div className='absolute w-full p-2 z-20'>
            {/* Top Text: */}
            <p className="text-xs text-off-white">Achievments & Involvements</p>

            {/* Draw a line: */}
            <div className="border-b-1 border-gray-lightest mt-1"></div>
          </div>

          {/* Top shade: */}
          <div className="bg-gradient-to-b w-full absolute z-10 from-gray-light via-gray-light
                          to-transparent h-20 transition-all ease-in duration-200">
          </div>

          {/* Scrolling: */}
          <div className="overflow-y-auto h-[190px] overflow-hidden no-scrollbar scroll-smooth relative">
           
            {/* Content: */}
            <div className="flex gap-x-3 mt-16 px-2">
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2020 - 2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tufts University</p>
                <p className='text-xs text-neutral-500 font-semibold'>Dean's List</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className="flex gap-x-3 mt-4 px-2">
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>NSBE</p>
                <p className='text-xs text-neutral-500 font-semibold'>Attended NSBE Conference</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>
            
            {/* Content: */}
            <div className="flex gap-x-3 mt-4 px-2">
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2024</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>COCOA</p>
                <p className='text-xs text-neutral-500 font-semibold'>Member of the only Tufts Afrobeats Dance Team</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>  

            {/* Content: */}
            <div className="flex gap-x-3 mt-4 px-2">
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2023</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>Tufts Onyx Magazine</p>
                <p className='text-xs text-neutral-500 font-semibold'>Web Designer for the only Black Magazine at Tufts</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

            {/* Content: */}
            <div className="flex gap-x-3 mt-4 mb-8 px-2">
              <p className='text-xs text-neutral-400 w-20 shrink-0'>2022</p>
              <div className='flex flex-col'>
                <p className='text-xs text-off-white font-bold'>NASA</p>
                <p className='text-xs text-neutral-500 font-semibold'>NASA MITTIC Finalist</p>
              </div>
            </div>
            <div className="w-full h-[0.9px] bg-neutral-800 mt-3"></div>

          </div>

          {/* Bottom shade: */}
          <div className="bg-gradient-to-t w-full absolute z-10 from-gray-light via-gray-light
                          to-transparent bottom-0 h-10 transition-all ease-in duration-200">
          </div>
        </div>
        {/***********************************/}



        {/************* Stack: ************/}
        <div className="bg-gray-light border-1 border-neutral-600 rounded-lg
                          z-20 h-44 relative col-span-2">
          {/* Top Part: */}
          <div className='absolute w-full p-2 z-20'>
            {/* Top Text: */}
            <p className="text-xs text-off-white">Stack</p>

            {/* Draw a line: */}
            <div className="w-full h-[0.9px] bg-neutral-600 mt-1 top-7"></div>
          </div>

          {/* List of Stacks: */}
          <div className="mt-10 px-2 w-full">
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-gray-lighter border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">React.js</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Tailwind CSS</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">C++</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">C</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Python</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Javascript</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">HTML</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">CSS</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">Figma</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Framer</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">Canva</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Photoshop</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Unity</p>
              </div>
              <div className="rounded-full border-1 bg-gray-lighter border-neutral-600 p-2">
                <p className="text-xs text-off-white">Blender</p>
              </div>
              <div className="rounded-full border-1 border-neutral-600 p-2">
                <p className="text-xs text-off-white">Git</p>
              </div>
            </div>
          </div>
        </div>
        {/**********************************/}



        {/******** Years of XP + RESUME *********/}
        <div className="rounded-lg grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          {/************ Years of XP: *********/}
          <div className="bg-gray-light border-1 border-neutral-600 rounded-lg
                          h-44 p-2 relative">
            {/* Top Part: */}
            <div className="absolute w-full p-2 z-20">
              {/* Top Text: */}
              <p className="text-xs text-off-white">Years of Experience</p>

              {/* Draw a line: */}
              <div className="border-b-1 border-gray-lightest mt-1"></div>
            </div>

            {/* Content: */}
            <div className="mt-10 w-full flex justify-center items-center">
              <p className="text-8xl text-off-white font-medium">5</p>
            </div>
          </div>
          {/**********************************/}


          {/*********** Resume **************/}
          <div className="bg-gray-light border-1 border-neutral-600 rounded-lg
                            h-44 p-2 relative z-40">
            {/* Top Part: */}
            <div className="absolute w-full p-2 z-20">
              {/* Top Text: */}
              <p className="text-xs text-off-white">Resume</p>

              {/* Draw a line: */}
              <div className="border-b-1 border-gray-lightest mt-1"></div>
            </div>

            {/* Buttons Container:: */}
            <div className="mt-24 w-full">
              {/* View: */}
              <button onClick={viewResume}
                      className="text-xs flex w-full items-center justify-between border-1 py-1 px-2
                                border-neutral-600 rounded-full bg-neutral-700/40
                                hover:border-neutral-400">
                <span className="text-off-white">View</span>
                <ArrowUpRightIcon
                  className="text-off-white size-[10px] inline-block ml-auto"
                />
              </button>

              {/* Download: */}
              <button onClick={downloadResume}
                      className="text-xs flex w-full mt-3 items-center justify-between border-1
                                py-1 px-2 border-neutral-600 rounded-full bg-neutral-700/40
                                hover:border-neutral-400">
                <span className="text-off-white">Download</span>
                <ArrowDownIcon
                  className="text-off-white size-[10px] inline-block"
                />
              </button>            
            </div>
          </div>
        </div>
        {/**********************************/}        

      </div>
    </div>
  );
}

export default Body;
