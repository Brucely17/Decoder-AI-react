import React from 'react'
import {logo} from '../assets'


function Hero() {
  return (
   
    <header className='w-full flex 
    justify-center 
    items-center 
     flex-col'>
      {/* adding logo to the website */}
     <nav className='flex justify-between 
     items-center w-full mb-10 pt-3'>
    
        <img src={logo} alt='logo' className='w-28 
        object-contain' />
        <button type='button'
         onClick={() => window.open('https://github.com')}
         className='black_btn'>Github

        </button>
     </nav>
     <h1 className='head_text'>
      Summarize Articles and Books  with <br
      className='max-md:hidden'></br>
      <span className='orange_gradient'>OpenAI GPT-4</span>
     </h1>
     <h2 className='desc'>
      This article or book summarizer is 
      made for researchers  and students who struggle to study lots of things in last minute .
      Instead stick with this free app which increases your productivity and help in lastminute of exams.
     </h2>

    </header>
  )
}

export default Hero;
