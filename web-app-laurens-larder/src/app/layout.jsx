import Head from "next/head";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";


export default function Layout({ children }) {  
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

