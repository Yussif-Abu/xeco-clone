import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { partners } from "../constants";

const Partners = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate the logos to create a seamless infinite scroll
    const clonedNodes = [...slider.children].map((child) => child.cloneNode(true));
    clonedNodes.forEach((node) => slider.appendChild(node));

    // GSAP Animation
    gsap.to(slider, {
      xPercent: -50, // Moves the entire slider to the left
      duration: 100, // Adjust the duration for speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center overflow-hidden">
      <h1 className="flex font-bold text-xl mb-10">Our Top Partners</h1>
      <div
        ref={sliderRef}
        className="flex gap-10 w-max items-center"
        style={{ display: "flex" }}
      >
        {partners.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <img src={item.icon} alt={item.name} className="h-10 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
