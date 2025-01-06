import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

// components
import Navbar from './components/Navbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-poppins', 
});


// WIP

// import { Pacifico } from "next/font/google";

// FONT
const pacifico = Pacifico({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-pacifico',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${pacifico.variable}`}>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

