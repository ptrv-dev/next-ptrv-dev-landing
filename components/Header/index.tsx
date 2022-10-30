import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 w-full py-10">
      <div className="container flex justify-between items-center">
        <Link href="/" className="shrink-0">
          <img src="./static/img/logo.svg" alt="" />
        </Link>
        <nav>
          <ul className="flex gap-7 items-center uppercase">
            <li className="hover:text-teal-500 cursor-pointer">Home</li>
            <li className="hover:text-teal-500 cursor-pointer">About me</li>
            <li className="hover:text-teal-500 cursor-pointer">
              Recent projects
            </li>
            <li className="hover:text-teal-500 cursor-pointer">Contact me</li>
          </ul>
        </nav>
        <div className="uppercase flex items-center gap-2">
          <span>Eng</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.5L8 10.5L3 5.5"
              stroke="#F5F5F4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
