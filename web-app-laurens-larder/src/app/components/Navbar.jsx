'use client';

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
          <div className="nav-container">
            {/* LEFT PART */}
            <div className="nav-left">
            <Link href="/">
                <Image
                    src="/LL logo 2.jpg"
                    alt="Catering Business Logo"
                    width={120}   
                    height={120}   
                    priority      
                    className="logo"
                  />
              </Link>
            </div>

            {/* RIGHT PART - MOBILE VERSION*/}
            <div className="hidden md:flex md:align-center md:fixed md:right-[20px] md:gap-[10px]">
                <Link href="/catering">CATERING</Link>
                <Link href="/pop-up">POP-UP</Link>
                <div id="order">
                  <Link 
                    href="https://cookaborough.com/laurens-larder/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      ORDER
                  </Link>
                </div>
            </div>

            {/* RIGHT PART - DESKTOP VERSION*/}
            {/* Hamburger Icon: Mobile Only */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-xl"
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>

            {/* Dropdown Menu for Mobile */}
            {menuOpen && (
              <div className="absolute top-[70px] right-4 bg-[var(--pink)] text-[var(--pink-background)] flex flex-col items-end px-4 py-3 gap-3 rounded-md shadow-lg desktop:hidden">
                <Link href="/catering" onClick={() => setMenuOpen(false)}>CATERING</Link>
                <Link href="/pop-up" onClick={() => setMenuOpen(false)}>POP-UP</Link>
                <Link
                  href="https://cookaborough.com/laurens-larder/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  ORDER
                </Link>
              </div>
            )}

          </div>
        </nav>
    )
}