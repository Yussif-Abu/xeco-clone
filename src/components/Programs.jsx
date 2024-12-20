import React from 'react'
import { programs } from '../constants'

const Programs = () => {
  return (
    <section className="flex flex-col w-full min-h-screen lg:px-10 rounded-3xl">
    <div className="flex flex-col mb-[5rem] mt-[6rem] md:mt-[8rem] lg:mt-[10rem] justify-center items-center w-full text-center">
      <h1 className=" flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
        <span className=" relative  md:pr-5 lg:pr-10 mb-1">
        Revolutionary ICO Platform with Exclusive
        </span>
        <span className="pt-5 text-transparent bg-clip-text bg-text-gradient">
        Rewards Program
        </span>
      </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {programs.map((item) => (
            <div key={item.id} className="flex flex-col p-4 bg-gray-900 backdrop-blur-md rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <span className="text-sm">{item.description}</span>
                </div>
                <div className="flex">
                <img
                    src={item.icon}
                    alt="feature_img"
                    className="w-[200px] h-[200px] object-contain animate-bounce-side"
                />
                </div>
            </div>
            </div>
        ))}
    </div>

    
    
   
  </section>
  )
}

export default Programs