import React from 'react'
import { team } from '../constants'

const Team = () => {
  return (
    <section className="flex flex-col w-full  lg:px-10 bg-blue-black-gradient  rounded-3xl">
        <div className="flex flex-col mb-[5rem] mt-[6rem] md:mt-[8rem] lg:mt-[10rem] justify-center items-center w-full text-center">
            <h1 className=" flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                <span className="pt-5 text-transparent bg-clip-text bg-text-gradient">
                Meet the Brick Veneers
                </span>
            </h1>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 justify-center items-center w-full' >
            {team.map((item) => (
            < div key={item.id} className='flex flex-col items-center justify-center' >
                <img src={item.image} alt="Partners"
                className="object-contain " />
                <div className='flex flex-col m-2'>
                <h2 className=" font-semibold">{item.name}</h2>
                <h2 className="text-sm ">{item.position}</h2>
                </div>
            </div>
                
            ))}
        </div>
    </section>
  )
}

export default Team