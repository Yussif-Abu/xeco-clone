import React from 'react'
import contribution_shape01 from '../assets/images/contribution_shape01.png'
import contribution_shape02 from '../assets/images/contribution_shape02.png'
import Button from './Button';
import rightarrow from '../assets/icons/rightarrow.png'

function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;

  return (
    <>
      <div className="w-full lg:w-[65%] bg-gray-800 rounded-full h-6 relative">
        <div
          className="bg-blue-black-gradient h-full rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>

        <div className="flex justify-between w-full mt-2">
          <span className="text-left">65 target raised</span>
          <span className="text-right">1 ETH = $1000 = 3177.38 CIC</span>
        </div>
      </div>
    </>

  );
}

const Contributions = () => {
  return (
    <section className='flex flex-col px-10 '>
        <div className="flex flex-col mt-[6rem] md:mt-[8rem] lg:mt-[7rem] justify-center items-center w-full text-center">
            <h2 className='text-5xl mb-10'>
            <span className='text-transparent bg-clip-text bg-text-gradient'> $45,256,432</span> 
            <span> Contribution Receive </span>
            </h2>
            <div className='flex justify-between w-full max-w-lg text-sm mb-4'>
                <div className='flex flex-col '>
                    <span>PRE-SALE</span>
                    <span>┃</span>
                </div>
                <div className='flex flex-col '>
                    <span>SOFT CAP</span>
                    <span>┃</span>
                </div>
                <div className='flex flex-col '>
                    <span className=''>BONUS</span>
                    <span>┃</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'> 
            <ProgressBar value={75} max={100} />
        </div>
        <div className='flex flex-col lg:flex-row gap-[15rem] mt-10  w-full'>
            <div className='animate-bounce-slow hidden lg:block xl:block left-0'>
                <img src={contribution_shape01} alt="banner_shape02" />
            </div>
            <div className='flex lg:flex-row flex-col gap-10 justify-center items-center'>
                <Button label="Purchase a Token" iconURL={rightarrow}/>
                <Button label="Read White Paper" iconURL={rightarrow} className="bg-gray-800"/>
            </div>
            <div className='animate-bounce-side hidden lg:block xl:block  '>
            <img src={contribution_shape02} alt="banner_shape01"  />
        </div>
        </div>
    </section>
  )
}

export default Contributions