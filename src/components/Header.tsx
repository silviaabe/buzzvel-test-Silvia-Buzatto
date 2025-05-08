'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full p-4 sm:px-6 sm:py-6 md:px-10 lg:px-20 bg-white text-blue-gray-900">
      <div className="flex justify-between">
        <div className='flex items-center'>
          {/* Logo */}
          <div className="flex items-center w-[80px] sm:w-[90px] md:w-[103px] mr-4 md:mr-12 cursor-pointer">
            <Image
              src="/images/Logo-colored.png"
              alt="Uteach Logo"
              width={103}
              height={35}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-10 xl:gap-12 text-base font-medium leading-6">
            <a href="#" className="hover:font-extrabold">Products</a>
            <a href="#" className="hover:font-extrabold">Solutions</a>
            <a href="#" className="hover:font-extrabold">Pricing</a>
            <details className="group relative">
              <summary className="flex items-center cursor-pointer hover:font-extrabold">
                Resources
                <ChevronDown size={20} className="ml-2 group-open:rotate-180 transition-transform" />
              </summary>
            </details>
          </nav>
        </div>

        <div>
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-base font-medium leading-6 hover:font-extrabold cursor-pointer">Log In</button>
            <button className="h-10 lg:h-12 px-4 lg:px-6 rounded-lg border-2 border-blue-gray-900 text-base font-medium leading-6 hover:bg-gray-100 flex items-center justify-center cursor-pointer">
              Sign Up Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="cursor-pointer" />
            ) : (
              <Menu size={28} className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col mt-4 space-y-2 text-sm font-medium text-gray-900">
            <a href="#" className="hover:font-extrabold">Products</a>
            <a href="#" className="hover:font-extrabold">Solutions</a>
            <a href="#" className="hover:font-extrabold">Pricing</a>
            <details className="group">
              <summary className="flex items-center cursor-pointer hover:font-extrabold">
                Resources
                <ChevronDown size={14} className="ml-2 group-open:rotate-180 transition-transform" />
              </summary>
            </details>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="text-sm font-medium hover:font-extrabold cursor-pointer">Log In</button>
            <button className="rounded-lg border-2 border-blue-gray-900 px-4 py-1.5 text-sm font-medium hover:bg-gray-100 cursor-pointer">
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
