// import Link from "next/link";
import HelpIcon from '@mui/icons-material/Help';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Help() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="relative">
    <dropDown className="cursor-pointer flex items-center space-x-2" onClick={toggleDropdown}>
      <HelpIcon className="h-12 font-bold" />
      <span>help</span>
    </dropDown>
    {isOpen && (
      <div className="absolute top-full w-40 left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md " style={{zIndex:100}}>
        <Link href="/help">
          <p className="block px-4 py-2 hover:bg-gray-100">
            <div className="flex items-center ">
              <span>help Center</span>
            </div>
          </p>
        </Link>
        <Link href="/help">
          <p className="block px-4 py-2 hover:bg-gray-100">
            <div className="flex items-center">
              <span>help an Order</span>
            </div>
          </p>
        </Link>
        <Link href="/help">
          <p className="block px-4 py-2 hover:bg-gray-100 ">
            <div className="flex items-center">
              <span>help an Order</span>
            </div>
          </p>
        </Link>
      </div>
    )}
  </div>
  )
}
