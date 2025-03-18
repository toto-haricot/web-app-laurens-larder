import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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

            {/* RIGHT PART */}
            <div className="nav-right">
                <Link href="/catering">CATERING</Link>
                <Link href="/pop-up">POP-UP</Link>
                <div id="order">
                  <Link href="/order">ORDER</Link>
                </div>
                
            </div>
          </div>
        </nav>
    )
}