import React from 'react'
import Countdown from './Countdown'
import banner_shape01 from '../assets/images/banner_shape01.png'
import banner_shape02 from '../assets/images/banner_shape02.png'

const Hero = () => {
  return (
  <section className="flex flex-col w-full min-h-screen lg:px-10 bg-blue-black-gradient rounded-3xl">
  <div className="flex flex-col mb-[5rem] mt-[6rem] md:mt-[8rem] lg:mt-[10rem] justify-center items-center w-full text-center">
    <h1 className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
      <span className="relative pr-0 md:pr-5 lg:pr-10 mb-1">
        Discover the Next Big Opportunity:
      </span>
      <span className="pt-5 text-transparent bg-clip-text bg-text-gradient">
        Our ICO is Live
      </span>
    </h1>
    <p className="mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-10 lg:mb-14 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
      <span className="capitalize">
        A new smart blockchain-based marketplace for trading digital
      </span>
      <br />
      <span className="capitalize">goods & assets according.</span>
    </p>
  </div>

  <div className="flex flex-row gap-5 justify-center items-center h-15">
    <div className="animate-bounce-side hidden lg:block xl:block">
      <img src={banner_shape01} alt="banner_shape01" />
    </div>
    <div className="flex justify-center items-center">
      <Countdown targetDate="2024-12-31T23:59:59" />
    </div>
    <div className="animate-bounce-slow hidden lg:block xl:block">
      <img src={banner_shape02} alt="banner_shape02" />
    </div>
  </div>

  <div className="flex flex-col items-center justify-center h-40">
    <div className="text-xl text-white animate-fall" style={{ animationDelay: '0s' }}>🇻</div>
    <div className="text-xl text-white animate-fall" style={{ animationDelay: '0.5s' }}>🇻</div>
    <div className="text-xl text-white animate-fall" style={{ animationDelay: '1s' }}>🇻</div>
  </div>
</section>

  
  )
}

export default Hero