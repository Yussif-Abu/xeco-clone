import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Accordion = ({ title, content, isActive, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        gsap.to(contentRef.current, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
          opacity: 1,
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.in",
          opacity: 0,
        });
      }
    }
  }, [isActive]);

  return (
    <div className="flex flex-col bg-gray-900 backdrop-blur-md shadow-md rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full text-left px-8 py-4 font-semibold text-lg transition-all duration-300 ${
          isActive
            ? "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            : "text-gray-200 hover:text-green-400"
        }`}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className="px-6 overflow-hidden bg-blue-black-gradient rounded-b-xl"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="py-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
