import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*Header section*/}
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menus">Menus</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
}
