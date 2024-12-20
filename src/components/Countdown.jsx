import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:flex lg:flex-row justify-center items-center"> 
      <div className="flex flex-col justify-center items-center box-content h-15 w-20 p-4 bg-white rounded-lg text-black">
        <span className="text-4xl font-bold">{timeLeft.days || '0'}</span>
        <span className="text-s leading-1">Days</span>
      </div>

      <div className="flex flex-col justify-center items-center box-content h-15 w-20 p-4 bg-white rounded-lg text-black">
        <span className="text-4xl font-bold">{timeLeft.hours || '0'}</span>
        <span className="text-s leading-1">Hours</span>
      </div>

      <div className="flex flex-col justify-center items-center box-content h-15 w-20 p-4 bg-white rounded-lg text-black">
        <span className="text-4xl font-bold">{timeLeft.minutes || '0'}</span>
        <span className="text-s leading-1">Minutes</span>
      </div>

      <div className="flex flex-col justify-center items-center box-content h-15 w-20 p-4 bg-white rounded-lg text-black">
        <span className="text-4xl font-bold">{timeLeft.seconds || '0'}</span>
        <span className="text-s leading-1">Seconds</span>
      </div>
  </div>

  );
};

export default Countdown;
