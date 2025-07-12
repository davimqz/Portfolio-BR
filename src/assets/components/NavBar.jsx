import { navItems } from "../../contants"
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className='sticky top-0 z-50 py-3  text-white backdrop:black bg-black'>
      <div className='container px-4 mx-auto relative lg:text-sm'>
        <div className='flex items-center justify-between'>
          <div className='flex-1 text-left'>
            <span className='text-xl font-bold'>Davi Oliveira</span>
          </div>
          <div className='flex-1 flex justify-center'>
            <ul className='flex space-x-12'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-400">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'></div>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
