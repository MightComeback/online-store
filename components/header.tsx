"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 w-full flex flex-col">
      <div className="w-full hidden md:flex justify-between p-2 text-sm">
        <h6>Company</h6>
        <div className="flex gap-4 items-center">
          <h6>Policy</h6>
          <span> | </span>
          <h6>Our Stores</h6>
        </div>
      </div>
      <div className="bg-white p-2">
        <div className="flex justify-between items-center px-8">
          <div>
            {/* Logo */}
            <Link href="#" className="italic">
              APPAREL
            </Link>
          </div>
          <div className="md:flex hidden gap-6 [&_h5]:font-semibold [&_h5]:text-md p-2">
            <h5>Featured</h5>
            <h5>Men</h5>
            <h5>Women</h5>
            <h5>Accessories</h5>
            <h5>Sale</h5>
          </div>
          <div className="flex gap-4 items-center">
            {/* Search */}
            <p>SEARCH</p>
            {/* Cart */}
            <p>CART</p>
            <HiMenuAlt4
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={25}
              className="md:hidden block cursor-pointer"
            />
            <div
              className={`absolute z-50 hidden right-0 top-10 w-[10rem] transition-all shadow-md overflow-hidden duration-500 bg-white p-2 ${
                isMenuOpen ? "right-0" : "-right-[400px]"
              }`}
            >
              <ul className="[&_li]:mb-4 last:mb-0 text-sm font-light">
                <li className="border-b border-black">
                  <Link href="#">FEATURED</Link>
                </li>
                <li className="border-b border-black">
                  <Link href="#">MEN</Link>
                </li>
                <li className="border-b border-black">
                  <Link href="#">WOMEN</Link>
                </li>
                <li className="border-b border-black">
                  <Link href="#">ACCESSORIES</Link>
                </li>
                <li className="border-b border-black">
                  <Link href="#">SALE</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col p-2 justify-center items-center">
          <span className="text-md font-semibold">New Collection Out Now!</span>
          <p>
            <Link href="/shop" className="underline text-sm">
              Shop Now
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
