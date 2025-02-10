import Head from "next/head";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

// FONTS DEFINITION ==============================================

import { Poppins, Pacifico, Yusei_Magic } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-poppins', 
});

const yuseiMagic = Yusei_Magic({
  subsets: ['latin'], 
  weight: '400', 
  variable: '--font-yusei', 
});

const pacifico = Pacifico({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-pacifico',
});

// ===============================================================



export default function Layout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${yuseiMagic.variable} ${pacifico.variable}`}>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

