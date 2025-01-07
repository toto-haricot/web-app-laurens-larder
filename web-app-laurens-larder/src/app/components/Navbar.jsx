import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
        <div className="nav-container">
        {/* Left Navigation */}
          <div className="nav-left">
            <Link href="/contact">CONTACT</Link>
          </div>

        {/* Logo Section */}
        <div className="nav-logo">
            <Image
              src="/LL logo 2.jpg"
              alt="Catering Business Logo"
              width={150} 
              height={250}
              objectFit="contain"
            />
          </div>

        {/* Right Navigation */}
        <div className="nav-right">
            <Link href="/about">ABOUT</Link>
            <Link href="/menus">MENUS</Link>
          </div>
        </div>
        </nav>
    )
}