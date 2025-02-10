import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 text-sm w-full h-15">
      {/* Left Side - Name & Copyright */}
      <div>
        &copy; {new Date().getFullYear()} Lauren's Larder
      </div>

      {/* Right Side - Social Links */}
      <div className="flex space-x-5">
        <a href="https://www.instagram.com/thomas-waldura/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-red-500" />
        </a>
        <a href="https://github.com/toto-haricot" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 hover:text-indigo-600" />
        </a>
        <a href="mailto:thomas.waldura@outlook.com">
          <Mail className="w-5 h-5 hover:text-green-400" />
        </a>
      </div>
    </footer>
  );
}