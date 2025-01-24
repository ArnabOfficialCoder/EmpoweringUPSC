import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to the world of UPSC, where your dreams of serving the nation can take flight! The Union Public Service Commission offers an incredible opportunity for dedicated individuals to become civil servants and make a real difference in society. While the journey may be challenging, it is also immensely rewarding. Each step you take in preparation builds not just knowledge, but also resilience and leadership skills.</p>
          <p>Embrace the process—every late night of study and every practice test brings you closer to your goal. Remember, persistence is your greatest ally; setbacks are merely stepping stones to success. Connecting with fellow aspirants and mentors can provide invaluable support and motivation.</p>
          <p>This exam is not just about clearing papers; it's about shaping your future and the future of our country. Believe in your potential, stay focused, and keep your passion alive. The road to success is paved with hard work and determination, and you have what it takes to reach your destination!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision a supportive community that empowers UPSC aspirants to realize their potential and serve the nation with integrity. By providing resources and guidance, we aim to nurture future leaders committed to making a positive impact in society. Together, we will inspire a new generation of dedicated public servants.



</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your dream preparation.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted guidance professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your aim.</p>
        </div>
      </div>

    </div>
  )
}

export default About
