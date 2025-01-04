import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

// components
import Navbar from './components/Navbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

