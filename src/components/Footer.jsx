import React from "react";
import { footerLinks } from "../constants"; 
const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
    
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.link}
                    className="hover:text-green-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}


        <div>
          <h3 className="text-white text-lg font-semibold mb-4">SUBSCRIBE NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Exercitatíon ullamcorper suscipit lobortis nisl aliquip ex ea commodo
          </p>
          <a
            href="mailto:Info@gmail.com"
            className="text-teal-400 hover:text-white transition block mb-6"
          >
            Info@gmail.com
          </a>
          <button className="bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded-full flex items-center space-x-2">
            <span>Subscribe</span>
           
          </button>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 mt-8 pt-6">
        Copyright &copy; 2024 Xeco | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
