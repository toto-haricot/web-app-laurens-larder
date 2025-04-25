import Head from "next/head";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

export default function Layout({ children }) {  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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

