import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function Navbar({ onOpenSidebar }) {
  return (
   <header className="fixed top-0 left-0 w-full bg-white py-4 px-6 flex items-center justify-between shadow-sm z-50">

      <Logo />

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded"
        onClick={onOpenSidebar}
      >
        <Menu size={24} />
      </button>

      <nav className="hidden md:flex items-center space-x-6 font-bold">
        <a href="#" className="text-gray-600 hover:text-blue-900">About Us</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">Features</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">More Option</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">Contact</a>
      </nav>

      <div className="hidden md:flex items-center space-x-3">
        <button className="border border-red-500 text-red-500 px-4  rounded-md hover:bg-red-50 transition-colors py-3">
          Log In
        </button>
        <button className="bg-red-500 text-white px-4  rounded-md hover:bg-red-600 transition-colors py-3">
          Sign Up
        </button>
      </div>
    </header>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
      <Logo />
        <button
          className="p-2 text-gray-600 hover:bg-gray-100 rounded"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#" className="text-gray-600 hover:text-blue-900">About Us</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">Features</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">More Option</a>
        <a href="#" className="text-gray-600 hover:text-blue-900">Contact</a>
      </nav>
      <div className="flex flex-col px-4 mt-4 space-y-2">
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition-colors">
          Log In
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
