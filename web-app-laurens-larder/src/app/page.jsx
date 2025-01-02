import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="nav-container">
          {/* Left Navigation */}
          <div className="nav-left">
            <Link href="/contact">CONTACT</Link>
          </div>

          {/* Logo Section */}
          <div className="nav-logo">
            <Image 
              src="/LL logo 2.jpg" // Replace with your logo file in the public folder
              alt="Catering Business Logo"
              width={100} 
              height={250}
            />
          </div>

          {/* Right Navigation */}
          <div className="nav-right">
            <Link href="/about">ABOUT</Link>
            <Link href="/menus">MENUS</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

